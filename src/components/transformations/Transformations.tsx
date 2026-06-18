

// // // // // // // "use client";

// // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // type State = "before" | "after";

// // // // // // // const VALUES: Record<State, number> = { before: 210, after: 870 };

// // // // // // // const DIMENSIONS = [
// // // // // // //   { name: "Emotional regulation", before: 24, after: 88 },
// // // // // // //   { name: "Confidence", before: 28, after: 90 },
// // // // // // //   { name: "Curiosity", before: 22, after: 93 },
// // // // // // //   { name: "Discipline", before: 26, after: 84 },
// // // // // // //   { name: "Connection", before: 16, after: 94 },
// // // // // // //   { name: "Resilience", before: 20, after: 89 },
// // // // // // // ];
// // // // // // // // const IMG_BASE = "/images/transformation";

// // // // // // // const BENEFITS = [
// // // // // // //   {
// // // // // // //     title: "You stop yelling",
// // // // // // //     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "They start talking",
// // // // // // //     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "You grow together",
// // // // // // //     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // // AICTE ticker line, repeated to fill the marquee.
// // // // // // // const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// // // // // // // export default function Transformation() {
// // // // // // //   const sectionRef = useRef<HTMLElement | null>(null);
// // // // // // //   const [state, setState] = useState<State>("before");
// // // // // // //   const [shimmerKilled, setShimmerKilled] = useState(false);
// // // // // // //   const [displayNum, setDisplayNum] = useState(VALUES.before);
// // // // // // //   const rafRef = useRef<number | null>(null);

// // // // // // //   // Count the gauge number up/down when the state changes.
// // // // // // //   useEffect(() => {
// // // // // // //     const target = VALUES[state];
// // // // // // //     const start = displayNum;
// // // // // // //     const startT = performance.now();
// // // // // // //     const dur = 1100;

// // // // // // //     const step = (now: number) => {
// // // // // // //       const p = Math.min((now - startT) / dur, 1);
// // // // // // //       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // easeOutExpo
// // // // // // //       setDisplayNum(Math.round(start + (target - start) * e));
// // // // // // //       if (p < 1) rafRef.current = requestAnimationFrame(step);
// // // // // // //     };

// // // // // // //     rafRef.current = requestAnimationFrame(step);
// // // // // // //     return () => {
// // // // // // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // // // // // //     };
// // // // // // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // // // // //   }, [state]);

// // // // // // //   // Bars: start at 0, then fill to their state value once scrolled into view.
// // // // // // //   const [filled, setFilled] = useState(false);
// // // // // // //   useEffect(() => {
// // // // // // //     const el = sectionRef.current;
// // // // // // //     if (!el || !("IntersectionObserver" in window)) {
// // // // // // //       setFilled(true);
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     const io = new IntersectionObserver(
// // // // // // //       (entries) => {
// // // // // // //         entries.forEach((en) => {
// // // // // // //           if (en.isIntersecting) {
// // // // // // //             setFilled(true);
// // // // // // //             io.disconnect();
// // // // // // //           }
// // // // // // //         });
// // // // // // //       },
// // // // // // //       { threshold: 0.25 }
// // // // // // //     );
// // // // // // //     io.observe(el);
// // // // // // //     return () => io.disconnect();
// // // // // // //   }, []);

// // // // // // //   const handleToggle = (next: State) => {
// // // // // // //     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
// // // // // // //     setState(next);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section
// // // // // // //       ref={sectionRef}
// // // // // // //       id="transformations"
// // // // // // //       className={`uxform ${shimmerKilled ? "shimmer-off" : ""}`}
// // // // // // //       data-state={state}
// // // // // // //     >
// // // // // // //       {/* Ticker marquee */}
// // // // // // //       <div className="ticker">
// // // // // // //         <div className="ticker-track">
// // // // // // //           {Array.from({ length: 8 }).map((_, i) => (
// // // // // // //             <span key={i} className="ticker-group">
// // // // // // //               <span className={`ticker-item ${i % 2 === 0 ? "accent" : "white"}`}>
// // // // // // //                 {TICKER_LINE}
// // // // // // //               </span>
// // // // // // //               <span className="ticker-star">✦</span>
// // // // // // //             </span>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="transform-inner">
// // // // // // //         {/* Pill */}
// // // // // // //         <div className="pill-wrap">
// // // // // // //           <div className="pill">
// // // // // // //             <span className="pill-dot" />
// // // // // // //             <span className="pill-text">The Transformation</span>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Heading */}
// // // // // // //         <h2 className="heading">
// // // // // // //           The same child.
// // // // // // //           <br />
// // // // // // //           <span className="gradient">An entirely different bond.</span>
// // // // // // //         </h2>

// // // // // // //         <p className="sub">
// // // // // // //           Watch your family&apos;s Bond Meter climb as your child grows. From
// // // // // // //           distant and distracted to confident, curious, and connected — measured
// // // // // // //           in real moments, not in time.
// // // // // // //         </p>

// // // // // // //         {/* Toggle */}
// // // // // // //         <div className="toggle-wrap">
// // // // // // //           <div className="toggle" role="tablist">
// // // // // // //             <button
// // // // // // //               className="toggle-btn"
// // // // // // //               data-tab="before"
// // // // // // //               role="tab"
// // // // // // //               aria-selected={state === "before"}
// // // // // // //               onClick={() => handleToggle("before")}
// // // // // // //             >
// // // // // // //               <IconClock />
// // // // // // //               Before
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               className="toggle-btn"
// // // // // // //               data-tab="after"
// // // // // // //               role="tab"
// // // // // // //               aria-selected={state === "after"}
// // // // // // //               onClick={() => handleToggle("after")}
// // // // // // //             >
// // // // // // //               <span className="shimmer" />
// // // // // // //               <IconSparkle />
// // // // // // //               After UltiMate
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Cards */}
// // // // // // //         <div className="cards-grid">
// // // // // // //           {/* LEFT: Bond Meter gauge */}
// // // // // // //           <div className="glass-card bond-card">
// // // // // // //             <div className="card-label">Bond Meter</div>

// // // // // // //             <div className="gauge-wrap">
// // // // // // //               <svg className="gauge-svg" viewBox="0 0 240 240">
// // // // // // //                 <defs>
// // // // // // //                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // // //                     <stop offset="0%" stopColor="#ffb13d" />
// // // // // // //                     <stop offset="35%" stopColor="#ff7a18" />
// // // // // // //                     <stop offset="72%" stopColor="#ff4d8d" />
// // // // // // //                     <stop offset="100%" stopColor="#a24bff" />
// // // // // // //                   </linearGradient>
// // // // // // //                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // // //                     <stop offset="0%" stopColor="#8d8ab8" />
// // // // // // //                     <stop offset="100%" stopColor="#a29fce" />
// // // // // // //                   </linearGradient>
// // // // // // //                 </defs>
// // // // // // //                 <circle className="gauge-track" cx="120" cy="120" r="100" />
// // // // // // //                 <circle className="gauge-val" cx="120" cy="120" r="100" />
// // // // // // //               </svg>

// // // // // // //               <div className="planet">
// // // // // // //                 <div className="planet-score">{displayNum}</div>
// // // // // // //                 <div className="planet-total">/ 1000</div>
// // // // // // //                 <div className="planet-badge">
// // // // // // //                   <span className="swap-before">Disconnected</span>
// // // // // // //                   <span className="swap-after">Thriving</span>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <div className="zones">
// // // // // // //               <div className="zone" data-zone="disconnected">
// // // // // // //                 <div className="zone-name">Disconnected</div>
// // // // // // //                 <div className="zone-range">0–333</div>
// // // // // // //               </div>
// // // // // // //               <div className="zone" data-zone="connected">
// // // // // // //                 <div className="zone-name">Connected</div>
// // // // // // //                 <div className="zone-range">334–666</div>
// // // // // // //               </div>
// // // // // // //               <div className="zone" data-zone="thriving">
// // // // // // //                 <div className="zone-name">Thriving</div>
// // // // // // //                 <div className="zone-range">667–1000</div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* RIGHT: Six dimensions */}
// // // // // // //           <div className="glass-card dims-card">
// // // // // // //             <div className="card-label">Six dimensions of the bond</div>

// // // // // // //             <div className="dims-list">
// // // // // // //               {DIMENSIONS.map((d) => (
// // // // // // //                 <div
// // // // // // //                   key={d.name}
// // // // // // //                   className="dim-row"
// // // // // // //                   style={
// // // // // // //                     {
// // // // // // //                       "--w-before": `${d.before}%`,
// // // // // // //                       "--w-after": `${d.after}%`,
// // // // // // //                     } as React.CSSProperties
// // // // // // //                   }
// // // // // // //                 >
// // // // // // //                   <div className="dim-head">
// // // // // // //                     <span className="dim-icon">
// // // // // // //                       <IconDot />
// // // // // // //                     </span>
// // // // // // //                     <span className="dim-name">{d.name}</span>
// // // // // // //                     <span className="dim-vals">
// // // // // // //                       <span className="dim-before">{d.before}</span>
// // // // // // //                       <span className="dim-arrow">
// // // // // // //                         <IconArrow />
// // // // // // //                       </span>
// // // // // // //                       <span className="dim-after">{d.after}</span>
// // // // // // //                     </span>
// // // // // // //                   </div>
// // // // // // //                   <div className="dim-track">
// // // // // // //                     <div
// // // // // // //                       className="dim-fill"
// // // // // // //                       style={filled ? undefined : { width: "0%" }}
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             <div className="dims-foot">
// // // // // // //               <span className="quote-icon">
// // // // // // //                 <IconQuote />
// // // // // // //               </span>
// // // // // // //               <p className="quote-text">
// // // // // // //                 <span className="swap-before">
// // // // // // //                   The dashed line marks where each thread of the bond started.{" "}
// // // // // // //                   <b>Before, the words came out sharp</b> and the moment closed
// // // // // // //                   before it ever opened.
// // // // // // //                 </span>
// // // // // // //                 <span className="swap-after">
// // // // // // //                   Same child, same ten minutes a day.{" "}
// // // // // // //                   <b>You respond instead of react</b> — and every thread of the
// // // // // // //                   bond climbs into the Thriving zone.
// // // // // // //                 </span>
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Benefits */}
// // // // // // //         <div className="benefits">
// // // // // // //           {BENEFITS.map((b) => (
// // // // // // //             <div key={b.title} className="benefit">
// // // // // // //               <div className="benefit-icon">
// // // // // // //                 <IconStar />
// // // // // // //               </div>
// // // // // // //               <h3 className="benefit-title">{b.title}</h3>
// // // // // // //               <p className="benefit-body">{b.body}</p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <p className="bottom-line">
// // // // // // //           10 minutes a day. One deed. Three lives transformed.
// // // // // // //         </p>

// // // // // // //         <div className="cta-wrap">
// // // // // // //           <button className="cta">
// // // // // // //             Start the transformation <IconArrowRight />
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //            {/* <div className="pointer-events-none relative z-[1] mt-[clamp(2.5rem,3vh,6.25rem)] -mx-[clamp(1.125rem,2vw,4.5rem)] leading-[0]">
// // // // // // //         <img
// // // // // // //           src={`${IMG_BASE}/branch.webp`}
// // // // // // //           alt=""
// // // // // // //           className="block h-auto w-full bg-transparent"
// // // // // // //           onError={(e) => { e.currentTarget.style.opacity = "0"; }}
// // // // // // //         />
// // // // // // //       </div> */}
// // // // // // //       <style jsx>{`
// // // // // // //         .uxform {
// // // // // // //           --text-primary: #ffffff;
// // // // // // //           --text-secondary: #c3c2ce;
// // // // // // //           --text-muted: #8b8a98;
// // // // // // //           --text-faint: #5c5b68;
// // // // // // //           --orange-glow: #ff9a40;
// // // // // // //           --orange-text: #ffb36b;
// // // // // // //           --orange-deep: #ff7a18;
// // // // // // //           --headline-gradient: linear-gradient(
// // // // // // //             100deg,
// // // // // // //             #ffb13d 0%,
// // // // // // //             #ff7a18 26%,
// // // // // // //             #ff4d8d 64%,
// // // // // // //             #a24bff 100%
// // // // // // //           );
// // // // // // //           --bar-gradient: linear-gradient(
// // // // // // //             90deg,
// // // // // // //             #ffb13d 0%,
// // // // // // //             #ff7a18 35%,
// // // // // // //             #ff4d8d 72%,
// // // // // // //             #a24bff 100%
// // // // // // //           );
// // // // // // //           --cta-gradient: linear-gradient(
// // // // // // //             172deg,
// // // // // // //             #ffae57 0%,
// // // // // // //             #ff8a2e 40%,
// // // // // // //             #fb6e11 100%
// // // // // // //           );
// // // // // // //           --toggle-gradient: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%);
// // // // // // //           --accent-gradient: linear-gradient(
// // // // // // //             135deg,
// // // // // // //             #ff9a40 0%,
// // // // // // //             #ff7a18 28%,
// // // // // // //             #ff4d8d 62%,
// // // // // // //             #a24bff 100%
// // // // // // //           );
// // // // // // //           --lg-bg: rgba(255, 255, 255, 0.04);
// // // // // // //           --lg-border-color: rgba(255, 255, 255, 0.1);
// // // // // // //           --lg-blur: 50px;
// // // // // // //           --lg-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
// // // // // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.04),
// // // // // // //             0 18px 50px rgba(0, 0, 0, 0.3);
// // // // // // //           --lg-shadow-hover: inset 0 1px 0 rgba(255, 255, 255, 0.18),
// // // // // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.06),
// // // // // // //             0 32px 80px rgba(0, 0, 0, 0.45), 0 0 60px rgba(255, 154, 64, 0.08);
// // // // // // //           --container-max: 1280px;
// // // // // // //           --side-pad: clamp(20px, 4vw, 48px);

// // // // // // //           position: relative;
// // // // // // //           width: 100%;
// // // // // // //           padding: 0 0 clamp(48px, 7vh, 96px);
// // // // // // //           overflow: hidden;
// // // // // // //           background: #050507;
// // // // // // //           color: var(--text-primary);
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           -webkit-font-smoothing: antialiased;
// // // // // // //         }

// // // // // // //         /* Ticker */
// // // // // // //         .ticker {
// // // // // // //           position: relative;
// // // // // // //           z-index: 2;
// // // // // // //           width: 100%;
// // // // // // //           overflow: hidden;
// // // // // // //           border-top: 1px solid rgba(255, 255, 255, 0.1);
// // // // // // //           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// // // // // // //           background: linear-gradient(
// // // // // // //             180deg,
// // // // // // //             rgba(255, 122, 24, 0.05) 0%,
// // // // // // //             rgba(255, 122, 24, 0.01) 100%
// // // // // // //           );
// // // // // // //           padding: 18px 0;
// // // // // // //           margin-bottom: clamp(64px, 9vh, 130px);
// // // // // // //           -webkit-mask-image: linear-gradient(
// // // // // // //             90deg,
// // // // // // //             transparent,
// // // // // // //             #000 7%,
// // // // // // //             #000 93%,
// // // // // // //             transparent
// // // // // // //           );
// // // // // // //           mask-image: linear-gradient(
// // // // // // //             90deg,
// // // // // // //             transparent,
// // // // // // //             #000 7%,
// // // // // // //             #000 93%,
// // // // // // //             transparent
// // // // // // //           );
// // // // // // //         }
// // // // // // //         .ticker-track {
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 26px;
// // // // // // //           white-space: nowrap;
// // // // // // //           will-change: transform;
// // // // // // //           animation: ux-ticker 40s linear infinite;
// // // // // // //         }
// // // // // // //         .ticker-group {
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 26px;
// // // // // // //         }
// // // // // // //         .ticker-item {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: clamp(16px, 1.7vw, 26px);
// // // // // // //           letter-spacing: 0.26px;
// // // // // // //           color: var(--text-secondary);
// // // // // // //         }
// // // // // // //         .ticker-item.accent {
// // // // // // //           color: var(--orange-glow);
// // // // // // //         }
// // // // // // //         .ticker-item.white {
// // // // // // //           color: #ffffff;
// // // // // // //         }
// // // // // // //         .ticker-star {
// // // // // // //           color: var(--orange-deep);
// // // // // // //           font-size: clamp(13px, 1.3vw, 20px);
// // // // // // //         }
// // // // // // //         @keyframes ux-ticker {
// // // // // // //           from {
// // // // // // //             transform: translateX(0);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             transform: translateX(-50%);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         .transform-inner {
// // // // // // //           position: relative;
// // // // // // //           z-index: 1;
// // // // // // //           max-width: var(--container-max);
// // // // // // //           margin: 0 auto;
// // // // // // //           padding: 0 var(--side-pad);
// // // // // // //         }

// // // // // // //         /* Pill */
// // // // // // //         .pill-wrap {
// // // // // // //           display: flex;
// // // // // // //           justify-content: center;
// // // // // // //           margin-bottom: 26px;
// // // // // // //         }
// // // // // // //         .pill {
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 10px;
// // // // // // //           height: 36px;
// // // // // // //           padding: 0 18px;
// // // // // // //           border-radius: 999px;
// // // // // // //           border: 1.029px solid rgba(255, 154, 64, 0.25);
// // // // // // //           background: linear-gradient(
// // // // // // //             180deg,
// // // // // // //             rgba(255, 154, 64, 0.03) 0%,
// // // // // // //             rgba(255, 122, 24, 0.01) 100%
// // // // // // //           );
// // // // // // //           box-shadow: inset 0 1.029px 0 rgba(255, 255, 255, 0.16);
// // // // // // //         }
// // // // // // //         .pill-dot {
// // // // // // //           width: 7.2px;
// // // // // // //           height: 7.2px;
// // // // // // //           border-radius: 3.6px;
// // // // // // //           background: var(--orange-glow);
// // // // // // //           box-shadow: 0 0 8.229px var(--orange-glow);
// // // // // // //         }
// // // // // // //         .pill-text {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 600;
// // // // // // //           font-size: 12.343px;
// // // // // // //           color: var(--orange-text);
// // // // // // //           letter-spacing: 1.9749px;
// // // // // // //           text-transform: uppercase;
// // // // // // //         }

// // // // // // //         /* Heading */
// // // // // // //         .heading {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 800;
// // // // // // //           font-size: clamp(30px, 4.4vw, 60px);
// // // // // // //           line-height: 1.02;
// // // // // // //           letter-spacing: -1.2px;
// // // // // // //           text-align: center;
// // // // // // //           color: #fff;
// // // // // // //           margin: 0 auto 22px;
// // // // // // //           max-width: 760px;
// // // // // // //         }
// // // // // // //         .heading .gradient {
// // // // // // //           background: var(--headline-gradient);
// // // // // // //           -webkit-background-clip: text;
// // // // // // //           background-clip: text;
// // // // // // //           -webkit-text-fill-color: transparent;
// // // // // // //           color: transparent;
// // // // // // //         }
// // // // // // //         .sub {
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           font-weight: 400;
// // // // // // //           font-size: clamp(15px, 1.1vw, 20px);
// // // // // // //           line-height: 1.62;
// // // // // // //           color: var(--text-muted);
// // // // // // //           text-align: center;
// // // // // // //           max-width: 760px;
// // // // // // //           margin: 0 auto 36px;
// // // // // // //         }

// // // // // // //         /* Toggle */
// // // // // // //         .toggle-wrap {
// // // // // // //           display: flex;
// // // // // // //           justify-content: center;
// // // // // // //           margin-bottom: 44px;
// // // // // // //         }
// // // // // // //         .toggle {
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           height: 57px;
// // // // // // //           padding: 6px;
// // // // // // //           border-radius: 999px;
// // // // // // //           border: 1px solid rgba(255, 255, 255, 0.1);
// // // // // // //           background: rgba(255, 255, 255, 0.04);
// // // // // // //           backdrop-filter: blur(7px);
// // // // // // //           -webkit-backdrop-filter: blur(7px);
// // // // // // //           max-width: 100%;
// // // // // // //         }
// // // // // // //         .toggle-btn {
// // // // // // //           position: relative;
// // // // // // //           height: 43px;
// // // // // // //           border: none;
// // // // // // //           border-radius: 999px;
// // // // // // //           background: transparent;
// // // // // // //           cursor: pointer;
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           gap: 8px;
// // // // // // //           padding: 0 22px;
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 14.5px;
// // // // // // //           color: var(--text-muted);
// // // // // // //           overflow: hidden;
// // // // // // //           white-space: nowrap;
// // // // // // //           transition: color 0.4s ease, background 0.4s ease;
// // // // // // //         }
// // // // // // //         .toggle-btn :global(svg) {
// // // // // // //           width: 15px;
// // // // // // //           height: 15px;
// // // // // // //           flex-shrink: 0;
// // // // // // //         }

// // // // // // //         :global([data-state="before"]) .toggle-btn[data-tab="before"] {
// // // // // // //           background: rgba(255, 255, 255, 0.1);
// // // // // // //           color: #fff;
// // // // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) .toggle-btn[data-tab="after"] {
// // // // // // //           background: var(--toggle-gradient);
// // // // // // //           color: #fff;
// // // // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
// // // // // // //         }

// // // // // // //         .toggle-btn[data-tab="after"] .shimmer {
// // // // // // //           position: absolute;
// // // // // // //           top: 0;
// // // // // // //           left: -120%;
// // // // // // //           width: 70%;
// // // // // // //           height: 100%;
// // // // // // //           background: linear-gradient(
// // // // // // //             100deg,
// // // // // // //             transparent 0%,
// // // // // // //             rgba(255, 174, 87, 0) 20%,
// // // // // // //             rgba(255, 174, 87, 0.55) 50%,
// // // // // // //             rgba(255, 174, 87, 0) 80%,
// // // // // // //             transparent 100%
// // // // // // //           );
// // // // // // //           pointer-events: none;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .toggle-btn[data-tab="after"] .shimmer {
// // // // // // //           animation: ux-shimmer 2.4s ease-in-out infinite;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .toggle-btn[data-tab="after"] {
// // // // // // //           animation: ux-after-pulse 2.4s ease-in-out infinite;
// // // // // // //         }
// // // // // // //         :global(.shimmer-off) .toggle-btn[data-tab="after"] .shimmer {
// // // // // // //           display: none !important;
// // // // // // //           animation: none !important;
// // // // // // //         }
// // // // // // //         :global(.shimmer-off) .toggle-btn[data-tab="after"] {
// // // // // // //           animation: none !important;
// // // // // // //         }
// // // // // // //         @keyframes ux-shimmer {
// // // // // // //           0% {
// // // // // // //             left: -120%;
// // // // // // //           }
// // // // // // //           60% {
// // // // // // //             left: 130%;
// // // // // // //           }
// // // // // // //           100% {
// // // // // // //             left: 130%;
// // // // // // //           }
// // // // // // //         }
// // // // // // //         @keyframes ux-after-pulse {
// // // // // // //           0%,
// // // // // // //           100% {
// // // // // // //             color: var(--orange-text);
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             color: #ffd9ad;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* Cards grid */
// // // // // // //         .cards-grid {
// // // // // // //           display: grid;
// // // // // // //           grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
// // // // // // //           gap: 24px;
// // // // // // //           margin-bottom: 24px;
// // // // // // //           align-items: stretch;
// // // // // // //         }

// // // // // // //         .glass-card {
// // // // // // //           position: relative;
// // // // // // //           border-radius: 36px;
// // // // // // //           border: 1px solid var(--lg-border-color);
// // // // // // //           background: var(--lg-bg);
// // // // // // //           backdrop-filter: blur(var(--lg-blur));
// // // // // // //           -webkit-backdrop-filter: blur(var(--lg-blur));
// // // // // // //           box-shadow: var(--lg-shadow);
// // // // // // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // // //             box-shadow 0.5s ease;
// // // // // // //         }
// // // // // // //         .glass-card:hover {
// // // // // // //           transform: translateY(-4px);
// // // // // // //           box-shadow: var(--lg-shadow-hover);
// // // // // // //         }

// // // // // // //         .card-label {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 10px;
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 600;
// // // // // // //           font-size: 12px;
// // // // // // //           letter-spacing: 1.68px;
// // // // // // //           text-transform: uppercase;
// // // // // // //           color: var(--text-muted);
// // // // // // //         }
// // // // // // //         .card-label::before {
// // // // // // //           content: "";
// // // // // // //           width: 8px;
// // // // // // //           height: 8px;
// // // // // // //           border-radius: 4px;
// // // // // // //           background: var(--orange-glow);
// // // // // // //           box-shadow: 0 0 10px var(--orange-glow);
// // // // // // //         }

// // // // // // //         /* Bond gauge */
// // // // // // //         .bond-card {
// // // // // // //           padding: 36px 40px 40px;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //         }
// // // // // // //         .gauge-wrap {
// // // // // // //           position: relative;
// // // // // // //           width: 100%;
// // // // // // //           max-width: 360px;
// // // // // // //           margin: 28px auto 0;
// // // // // // //           aspect-ratio: 1 / 1;
// // // // // // //         }
// // // // // // //         .gauge-svg {
// // // // // // //           width: 100%;
// // // // // // //           height: 100%;
// // // // // // //           transform: rotate(-90deg);
// // // // // // //         }
// // // // // // //         .gauge-track {
// // // // // // //           fill: none;
// // // // // // //           stroke: rgba(255, 255, 255, 0.06);
// // // // // // //           stroke-width: 16;
// // // // // // //         }
// // // // // // //         .gauge-val {
// // // // // // //           fill: none;
// // // // // // //           stroke-width: 16;
// // // // // // //           stroke-linecap: round;
// // // // // // //           stroke: var(--gauge-stroke);
// // // // // // //           stroke-dasharray: 628.318;
// // // // // // //           stroke-dashoffset: var(--gauge-off);
// // // // // // //           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) {
// // // // // // //           --gauge-stroke: url(#uxGradBefore);
// // // // // // //           --gauge-off: 496.4;
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) {
// // // // // // //           --gauge-stroke: url(#uxGradAfter);
// // // // // // //           --gauge-off: 81.7;
// // // // // // //         }

// // // // // // //         .planet {
// // // // // // //           position: absolute;
// // // // // // //           top: 50%;
// // // // // // //           left: 50%;
// // // // // // //           transform: translate(-50%, -50%);
// // // // // // //           width: 62%;
// // // // // // //           aspect-ratio: 1/1;
// // // // // // //           border-radius: 50%;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           line-height: 1;
// // // // // // //           transition: background 0.8s ease, box-shadow 0.8s ease;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .planet {
// // // // // // //           background: radial-gradient(
// // // // // // //             circle at 38% 32%,
// // // // // // //             #3a3850 0%,
// // // // // // //             #2a2940 45%,
// // // // // // //             #1c1b2c 100%
// // // // // // //           );
// // // // // // //           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6),
// // // // // // //             inset 8px 10px 28px rgba(150, 148, 196, 0.18);
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) .planet {
// // // // // // //           background: radial-gradient(
// // // // // // //             circle at 38% 32%,
// // // // // // //             #ffe4c2 0%,
// // // // // // //             #ffcc97 9%,
// // // // // // //             #ffb36b 18%,
// // // // // // //             #ff9a40 40%,
// // // // // // //             #ff8a2c 51%,
// // // // // // //             #ff7a18 62%,
// // // // // // //             #c9510a 84%,
// // // // // // //             #a24208 92%,
// // // // // // //             #7a3206 100%
// // // // // // //           );
// // // // // // //           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5),
// // // // // // //             inset -10px -14px 36px rgba(70, 18, 0, 0.55),
// // // // // // //             inset 8px 10px 28px rgba(255, 224, 180, 0.45);
// // // // // // //         }
// // // // // // //         .planet-score {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 800;
// // // // // // //           font-size: clamp(40px, 5.6vw, 56px);
// // // // // // //           line-height: 1;
// // // // // // //           letter-spacing: -1.6px;
// // // // // // //           color: #fff;
// // // // // // //           text-shadow: 0 2px 14px rgba(80, 24, 0, 0.5);
// // // // // // //         }
// // // // // // //         .planet-total {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 13px;
// // // // // // //           color: rgba(255, 255, 255, 0.6);
// // // // // // //           margin-top: 4px;
// // // // // // //         }
// // // // // // //         .planet-badge {
// // // // // // //           margin-top: 12px;
// // // // // // //           padding: 5px 13px;
// // // // // // //           border-radius: 999px;
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 12px;
// // // // // // //           letter-spacing: 1.4px;
// // // // // // //           text-transform: uppercase;
// // // // // // //           transition: background 0.6s ease, color 0.6s ease;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .planet-badge {
// // // // // // //           background: rgba(255, 255, 255, 0.1);
// // // // // // //           color: var(--text-secondary);
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) .planet-badge {
// // // // // // //           background: rgba(255, 236, 210, 0.85);
// // // // // // //           color: #2a1402;
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) .planet-badge .swap-before {
// // // // // // //           display: none;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .planet-badge .swap-after {
// // // // // // //           display: none;
// // // // // // //         }

// // // // // // //         .zones {
// // // // // // //           display: grid;
// // // // // // //           grid-template-columns: repeat(3, 1fr);
// // // // // // //           gap: 16px;
// // // // // // //           margin-top: auto;
// // // // // // //           padding-top: 32px;
// // // // // // //         }
// // // // // // //         .zone {
// // // // // // //           position: relative;
// // // // // // //           border-radius: 14px;
// // // // // // //           border: 1px solid rgba(255, 255, 255, 0.06);
// // // // // // //           background: rgba(255, 255, 255, 0.02);
// // // // // // //           padding: 16px 10px;
// // // // // // //           text-align: center;
// // // // // // //           transition: border-color 0.5s ease, background 0.5s ease;
// // // // // // //         }
// // // // // // //         .zone-name {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 14px;
// // // // // // //           color: var(--text-muted);
// // // // // // //           transition: color 0.5s ease;
// // // // // // //         }
// // // // // // //         .zone-range {
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           font-weight: 500;
// // // // // // //           font-size: 13.5px;
// // // // // // //           color: var(--text-faint);
// // // // // // //           margin-top: 5px;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"],
// // // // // // //         :global([data-state="after"]) .zone[data-zone="thriving"] {
// // // // // // //           border-color: transparent;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
// // // // // // //         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
// // // // // // //           content: "";
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           border-radius: inherit;
// // // // // // //           padding: 1px;
// // // // // // //           background: var(--accent-gradient);
// // // // // // //           -webkit-mask: linear-gradient(#000 0 0) content-box,
// // // // // // //             linear-gradient(#000 0 0);
// // // // // // //           -webkit-mask-composite: xor;
// // // // // // //           mask-composite: exclude;
// // // // // // //           pointer-events: none;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
// // // // // // //         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name {
// // // // // // //           color: var(--orange-text);
// // // // // // //         }

// // // // // // //         /* Six dimensions */
// // // // // // //         .dims-card {
// // // // // // //           padding: 36px 40px 32px;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //         }
// // // // // // //         .dims-list {
// // // // // // //           margin-top: 24px;
// // // // // // //           flex: 1;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           justify-content: space-between;
// // // // // // //           gap: 18px;
// // // // // // //         }
// // // // // // //         .dim-row {
// // // // // // //           margin-bottom: 0;
// // // // // // //         }
// // // // // // //         .dim-head {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 9px;
// // // // // // //           margin-bottom: 8px;
// // // // // // //         }
// // // // // // //         .dim-icon {
// // // // // // //           width: 18px;
// // // // // // //           height: 18px;
// // // // // // //           flex-shrink: 0;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //         }
// // // // // // //         .dim-name {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 600;
// // // // // // //           font-size: 14.5px;
// // // // // // //           color: var(--text-secondary);
// // // // // // //           flex: 1;
// // // // // // //         }
// // // // // // //         .dim-vals {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 6px;
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 800;
// // // // // // //           font-size: 13px;
// // // // // // //         }
// // // // // // //         .dim-before {
// // // // // // //           color: var(--text-faint);
// // // // // // //         }
// // // // // // //         .dim-arrow {
// // // // // // //           display: inline-flex;
// // // // // // //           width: 12px;
// // // // // // //           height: 9px;
// // // // // // //         }
// // // // // // //         .dim-after {
// // // // // // //           color: var(--orange-text);
// // // // // // //         }

// // // // // // //         .dim-track {
// // // // // // //           position: relative;
// // // // // // //           height: 12px;
// // // // // // //           border-radius: 999px;
// // // // // // //           background: rgba(255, 255, 255, 0.07);
// // // // // // //           overflow: hidden;
// // // // // // //         }
// // // // // // //         .dim-fill {
// // // // // // //           position: absolute;
// // // // // // //           inset: 0 auto 0 0;
// // // // // // //           height: 100%;
// // // // // // //           border-radius: 999px;
// // // // // // //           width: var(--w-before);
// // // // // // //           transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // // //             background 0.6s ease;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .dim-fill {
// // // // // // //           width: var(--w-before);
// // // // // // //           background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%);
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) .dim-fill {
// // // // // // //           width: var(--w-after);
// // // // // // //           background: var(--bar-gradient);
// // // // // // //           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
// // // // // // //         }

// // // // // // //         .dims-foot {
// // // // // // //           margin-top: 26px;
// // // // // // //           padding-top: 22px;
// // // // // // //           border-top: 1px solid rgba(255, 255, 255, 0.06);
// // // // // // //           display: flex;
// // // // // // //           gap: 12px;
// // // // // // //         }
// // // // // // //         .quote-icon {
// // // // // // //           width: 20px;
// // // // // // //           height: 20px;
// // // // // // //           flex-shrink: 0;
// // // // // // //           margin-top: 2px;
// // // // // // //         }
// // // // // // //         .quote-text {
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           font-weight: 400;
// // // // // // //           font-size: 14.5px;
// // // // // // //           line-height: 1.6;
// // // // // // //           color: var(--text-muted);
// // // // // // //         }
// // // // // // //         .quote-text :global(b) {
// // // // // // //           font-weight: 600;
// // // // // // //           color: #fff;
// // // // // // //         }
// // // // // // //         .quote-text .swap-before,
// // // // // // //         .quote-text .swap-after {
// // // // // // //           display: none;
// // // // // // //         }
// // // // // // //         :global([data-state="before"]) .quote-text .swap-before {
// // // // // // //           display: inline;
// // // // // // //         }
// // // // // // //         :global([data-state="after"]) .quote-text .swap-after {
// // // // // // //           display: inline;
// // // // // // //         }

// // // // // // //         /* Benefits */
// // // // // // //         .benefits {
// // // // // // //           display: grid;
// // // // // // //           grid-template-columns: repeat(3, 1fr);
// // // // // // //           gap: 24px;
// // // // // // //         }
// // // // // // //         .benefit {
// // // // // // //           position: relative;
// // // // // // //           border-radius: 22px;
// // // // // // //           border: 1px solid var(--lg-border-color);
// // // // // // //           background: var(--lg-bg);
// // // // // // //           backdrop-filter: blur(var(--lg-blur));
// // // // // // //           -webkit-backdrop-filter: blur(var(--lg-blur));
// // // // // // //           box-shadow: var(--lg-shadow);
// // // // // // //           padding: 28px;
// // // // // // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // // //             box-shadow 0.5s ease;
// // // // // // //         }
// // // // // // //         .benefit:hover {
// // // // // // //           transform: translateY(-4px);
// // // // // // //           box-shadow: var(--lg-shadow-hover);
// // // // // // //         }
// // // // // // //         .benefit-icon {
// // // // // // //           position: relative;
// // // // // // //           width: 54px;
// // // // // // //           height: 54px;
// // // // // // //           border-radius: 15px;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           margin-bottom: 30px;
// // // // // // //         }
// // // // // // //         .benefit-icon::before {
// // // // // // //           content: "";
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           border-radius: inherit;
// // // // // // //           padding: 1px;
// // // // // // //           background: var(--accent-gradient);
// // // // // // //           -webkit-mask: linear-gradient(#000 0 0) content-box,
// // // // // // //             linear-gradient(#000 0 0);
// // // // // // //           -webkit-mask-composite: xor;
// // // // // // //           mask-composite: exclude;
// // // // // // //           pointer-events: none;
// // // // // // //         }
// // // // // // //         .benefit-title {
// // // // // // //           font-family: "Outfit", sans-serif;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 20px;
// // // // // // //           color: #fff;
// // // // // // //           margin-bottom: 14px;
// // // // // // //         }
// // // // // // //         .benefit-body {
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           font-weight: 400;
// // // // // // //           font-size: 15px;
// // // // // // //           line-height: 1.55;
// // // // // // //           color: var(--text-muted);
// // // // // // //         }

// // // // // // //         /* Bottom line + CTA */
// // // // // // //         .bottom-line {
// // // // // // //           text-align: center;
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           font-weight: 500;
// // // // // // //           font-size: clamp(16px, 1.4vw, 20px);
// // // // // // //           line-height: 1.62;
// // // // // // //           color: var(--text-muted);
// // // // // // //           margin: 40px auto 24px;
// // // // // // //         }
// // // // // // //         .cta-wrap {
// // // // // // //           display: flex;
// // // // // // //           justify-content: center;
// // // // // // //         }
// // // // // // //         .cta {
// // // // // // //           height: 61px;
// // // // // // //           padding: 0 36px;
// // // // // // //           border: none;
// // // // // // //           border-radius: 22px;
// // // // // // //           cursor: pointer;
// // // // // // //           background: var(--cta-gradient);
// // // // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.48);
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 12px;
// // // // // // //           font-family: "Poppins", sans-serif;
// // // // // // //           font-weight: 600;
// // // // // // //           font-size: 18px;
// // // // // // //           letter-spacing: 0.18px;
// // // // // // //           color: #fff;
// // // // // // //           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // // //             filter 0.4s ease;
// // // // // // //         }
// // // // // // //         .cta:hover {
// // // // // // //           transform: translateY(-2px);
// // // // // // //           filter: brightness(1.05);
// // // // // // //         }

// // // // // // //         /* Icon sizing inside the SVG wrappers */
// // // // // // //         .dim-icon :global(svg),
// // // // // // //         .dim-arrow :global(svg),
// // // // // // //         .quote-icon :global(svg),
// // // // // // //         .benefit-icon :global(svg),
// // // // // // //         .cta :global(svg) {
// // // // // // //           display: block;
// // // // // // //         }
// // // // // // //         .benefit-icon :global(svg) {
// // // // // // //           width: 26px;
// // // // // // //           height: 26px;
// // // // // // //         }
// // // // // // //         .cta :global(svg) {
// // // // // // //           width: 18px;
// // // // // // //           height: 18px;
// // // // // // //         }

// // // // // // //         /* Responsive */
// // // // // // //         @media (max-width: 980px) {
// // // // // // //           .cards-grid {
// // // // // // //             grid-template-columns: 1fr;
// // // // // // //           }
// // // // // // //           .benefits {
// // // // // // //             grid-template-columns: 1fr;
// // // // // // //           }
// // // // // // //           .bond-card,
// // // // // // //           .dims-card {
// // // // // // //             padding: 28px 24px;
// // // // // // //           }
// // // // // // //           .gauge-wrap {
// // // // // // //             max-width: 320px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //         @media (max-width: 560px) {
// // // // // // //           .heading {
// // // // // // //             font-size: 30px;
// // // // // // //           }
// // // // // // //           .zones {
// // // // // // //             grid-template-columns: repeat(3, 1fr);
// // // // // // //             gap: 10px;
// // // // // // //           }
// // // // // // //           .zone {
// // // // // // //             padding: 12px 6px;
// // // // // // //           }
// // // // // // //           .zone-name {
// // // // // // //             font-size: 12.5px;
// // // // // // //           }
// // // // // // //           .zone-range {
// // // // // // //             font-size: 12px;
// // // // // // //           }
// // // // // // //           .toggle {
// // // // // // //             height: auto;
// // // // // // //             flex-wrap: nowrap;
// // // // // // //           }
// // // // // // //           .toggle-btn {
// // // // // // //             padding: 0 16px;
// // // // // // //             font-size: 13px;
// // // // // // //           }
// // // // // // //           .cta {
// // // // // // //             font-size: 16px;
// // // // // // //             padding: 0 26px;
// // // // // // //           }
// // // // // // //           .bond-card,
// // // // // // //           .dims-card {
// // // // // // //             padding: 24px 18px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //         @media (max-width: 380px) {
// // // // // // //           .toggle-btn {
// // // // // // //             padding: 0 12px;
// // // // // // //             font-size: 12px;
// // // // // // //             gap: 6px;
// // // // // // //           }
// // // // // // //           .zones {
// // // // // // //             gap: 7px;
// // // // // // //           }
// // // // // // //           .zone-name {
// // // // // // //             font-size: 11.5px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // // //           .ticker-track,
// // // // // // //           .toggle-btn,
// // // // // // //           .toggle-btn .shimmer {
// // // // // // //             animation: none !important;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* ───────────────────────── Inline icon placeholders ─────────────────────────
// // // // // // //    These are simple stand-ins so the section renders without external assets.
// // // // // // //    Swap each for your real SVG/<img src="assets/icons/..."> as needed. Note the
// // // // // // //    original design flipped icons with scaleY(-1); these are drawn upright, so no
// // // // // // //    flip is needed. */

// // // // // // // function IconClock() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // // //       <circle cx="12" cy="12" r="9" />
// // // // // // //       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // function IconSparkle() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 24 24" fill="currentColor">
// // // // // // //       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // function IconDot() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 18 18" fill="none">
// // // // // // //       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
// // // // // // //       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // function IconArrow() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6">
// // // // // // //       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // function IconQuote() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 20 20" fill="#ff9a40">
// // // // // // //       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // function IconStar() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8">
// // // // // // //       <path
// // // // // // //         d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z"
// // // // // // //         strokeLinejoin="round"
// // // // // // //       />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // function IconArrowRight() {
// // // // // // //   return (
// // // // // // //     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2">
// // // // // // //       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client";

// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // /**
// // // // // //  * Transformation ("Bond Meter") section.
// // // // // //  *
// // // // // //  * Faithful React port of the standalone HTML design. The toggle (Before / After
// // // // // //  * UltiMate) drives a CSS data-state on the section root, which animates:
// // // // // //  *   - the radial gauge stroke + planet colouring
// // // // // //  *   - the six dimension bars
// // // // // //  *   - the zone highlight, badge, and quote copy
// // // // // //  * The score counts up in JS; the bars do an entrance "fill from 0" on scroll-in.
// // // // // //  *
// // // // // //  * All styles are scoped via a unique class so this drops in without touching
// // // // // //  * your Tailwind config. Replace the inline SVG icon placeholders / asset paths
// // // // // //  * with your real assets where noted.
// // // // // //  */

// // // // // // type State = "before" | "after";

// // // // // // const VALUES: Record<State, number> = { before: 210, after: 870 };

// // // // // // const DIMENSIONS = [
// // // // // //   { name: "Emotional regulation", before: 24, after: 88 },
// // // // // //   { name: "Confidence", before: 28, after: 90 },
// // // // // //   { name: "Curiosity", before: 22, after: 93 },
// // // // // //   { name: "Discipline", before: 26, after: 84 },
// // // // // //   { name: "Connection", before: 16, after: 94 },
// // // // // //   { name: "Resilience", before: 20, after: 89 },
// // // // // // ];

// // // // // // const BENEFITS = [
// // // // // //   {
// // // // // //     title: "You stop yelling",
// // // // // //     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "They start talking",
// // // // // //     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
// // // // // //   },
// // // // // //   {
// // // // // //     title: "You grow together",
// // // // // //     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
// // // // // //   },
// // // // // // ];

// // // // // // // AICTE ticker line, repeated to fill the marquee.
// // // // // // const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// // // // // // export default function Transformation() {
// // // // // //   const sectionRef = useRef<HTMLElement | null>(null);
// // // // // //   const [state, setState] = useState<State>("before");
// // // // // //   const [shimmerKilled, setShimmerKilled] = useState(false);
// // // // // //   const [displayNum, setDisplayNum] = useState(VALUES.before);
// // // // // //   const rafRef = useRef<number | null>(null);
// // // // // //   const router = useRouter()

// // // // // //   // Count the gauge number up/down when the state changes.
// // // // // //   useEffect(() => {
// // // // // //     const target = VALUES[state];
// // // // // //     const start = displayNum;
// // // // // //     const startT = performance.now();
// // // // // //     const dur = 1100;

// // // // // //     const step = (now: number) => {
// // // // // //       const p = Math.min((now - startT) / dur, 1);
// // // // // //       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // easeOutExpo
// // // // // //       setDisplayNum(Math.round(start + (target - start) * e));
// // // // // //       if (p < 1) rafRef.current = requestAnimationFrame(step);
// // // // // //     };

// // // // // //     rafRef.current = requestAnimationFrame(step);
// // // // // //     return () => {
// // // // // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // // // // //     };
// // // // // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // // // //   }, [state]);

// // // // // //   // Bars: start at 0, then fill to their state value once scrolled into view.
// // // // // //   const [filled, setFilled] = useState(false);
// // // // // //   useEffect(() => {
// // // // // //     const el = sectionRef.current;
// // // // // //     if (!el || !("IntersectionObserver" in window)) {
// // // // // //       setFilled(true);
// // // // // //       return;
// // // // // //     }
// // // // // //     const io = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((en) => {
// // // // // //           if (en.isIntersecting) {
// // // // // //             setFilled(true);
// // // // // //             io.disconnect();
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { threshold: 0.25 }
// // // // // //     );
// // // // // //     io.observe(el);
// // // // // //     return () => io.disconnect();
// // // // // //   }, []);

// // // // // //   const handleToggle = (next: State) => {
// // // // // //     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
// // // // // //     setState(next);
// // // // // //   };

// // // // // //   return (
// // // // // //     <section
// // // // // //       ref={sectionRef}
// // // // // //       id="transformations"
// // // // // //       className={`uxform ${shimmerKilled ? "shimmer-off" : ""}`}
// // // // // //       data-state={state}
// // // // // //     >
// // // // // //       {/* Ticker marquee */}
// // // // // //       <div className="ticker">
// // // // // //         <div className="ticker-track">
// // // // // //           {Array.from({ length: 8 }).map((_, i) => (
// // // // // //             <span key={i} className="ticker-group">
// // // // // //               <span className={`ticker-item ${i % 2 === 0 ? "accent" : "white"}`}>
// // // // // //                 {TICKER_LINE}
// // // // // //               </span>
// // // // // //               <span className="ticker-star">✦</span>
// // // // // //             </span>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="transform-inner">
// // // // // //         {/* Pill */}
// // // // // //         <div className="pill-wrap">
// // // // // //           <div className="pill">
// // // // // //             <span className="pill-dot" />
// // // // // //             <span className="pill-text">The Transformation</span>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Heading */}
// // // // // //         <h2 className="heading">
// // // // // //           The same child.
// // // // // //           <br />
// // // // // //           <span className="gradient">An entirely different bond.</span>
// // // // // //         </h2>

// // // // // //         <p className="sub">
// // // // // //           Watch your family&apos;s Bond Meter climb as your child grows. From
// // // // // //           distant and distracted to confident, curious, and connected — measured
// // // // // //           in real moments, not in time.
// // // // // //         </p>

// // // // // //         {/* Toggle */}
// // // // // //         <div className="toggle-wrap">
// // // // // //           <div className="toggle" role="tablist">
// // // // // //             <button
// // // // // //               className="toggle-btn"
// // // // // //               data-tab="before"
// // // // // //               role="tab"
// // // // // //               aria-selected={state === "before"}
// // // // // //               onClick={() => handleToggle("before")}
// // // // // //             >
// // // // // //               <IconClock />
// // // // // //               Before
// // // // // //             </button>
// // // // // //             <button
// // // // // //               className="toggle-btn"
// // // // // //               data-tab="after"
// // // // // //               role="tab"
// // // // // //               aria-selected={state === "after"}
// // // // // //               onClick={() => handleToggle("after")}
// // // // // //             >
// // // // // //               <span className="shimmer" />
// // // // // //               <IconSparkle />
// // // // // //               After UltiMate
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Cards */}
// // // // // //         <div className="cards-grid">
// // // // // //           {/* LEFT: Bond Meter gauge */}
// // // // // //           <div className="glass-card bond-card">
// // // // // //             <div className="card-label">Bond Meter</div>

// // // // // //             <div className="gauge-wrap">
// // // // // //               <svg className="gauge-svg" viewBox="0 0 240 240">
// // // // // //                 <defs>
// // // // // //                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // //                     <stop offset="0%" stopColor="#ffb13d" />
// // // // // //                     <stop offset="35%" stopColor="#ff7a18" />
// // // // // //                     <stop offset="72%" stopColor="#ff4d8d" />
// // // // // //                     <stop offset="100%" stopColor="#a24bff" />
// // // // // //                   </linearGradient>
// // // // // //                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // // //                     <stop offset="0%" stopColor="#8d8ab8" />
// // // // // //                     <stop offset="100%" stopColor="#a29fce" />
// // // // // //                   </linearGradient>
// // // // // //                 </defs>
// // // // // //                 <circle className="gauge-track" cx="120" cy="120" r="100" />
// // // // // //                 <circle className="gauge-val" cx="120" cy="120" r="100" />
// // // // // //               </svg>

// // // // // //               <div className="planet">
// // // // // //                 <div className="planet-score">{displayNum}</div>
// // // // // //                 <div className="planet-total">/ 1000</div>
// // // // // //                 <div className="planet-badge">
// // // // // //                   <span className="swap-before">Disconnected</span>
// // // // // //                   <span className="swap-after">Thriving</span>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="zones">
// // // // // //               <div className="zone" data-zone="disconnected">
// // // // // //                 <div className="zone-name">Disconnected</div>
// // // // // //                 <div className="zone-range">0–333</div>
// // // // // //               </div>
// // // // // //               <div className="zone" data-zone="connected">
// // // // // //                 <div className="zone-name">Connected</div>
// // // // // //                 <div className="zone-range">334–666</div>
// // // // // //               </div>
// // // // // //               <div className="zone" data-zone="thriving">
// // // // // //                 <div className="zone-name">Thriving</div>
// // // // // //                 <div className="zone-range">667–1000</div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* RIGHT: Six dimensions */}
// // // // // //           <div className="glass-card dims-card">
// // // // // //             <div className="card-label">Six dimensions of the bond</div>

// // // // // //             <div className="dims-list">
// // // // // //               {DIMENSIONS.map((d) => (
// // // // // //                 <div
// // // // // //                   key={d.name}
// // // // // //                   className="dim-row"
// // // // // //                   style={
// // // // // //                     {
// // // // // //                       "--w-before": `${d.before}%`,
// // // // // //                       "--w-after": `${d.after}%`,
// // // // // //                     } as React.CSSProperties
// // // // // //                   }
// // // // // //                 >
// // // // // //                   <div className="dim-head">
// // // // // //                     <span className="dim-icon">
// // // // // //                       <IconDot />
// // // // // //                     </span>
// // // // // //                     <span className="dim-name">{d.name}</span>
// // // // // //                     <span className="dim-vals">
// // // // // //                       <span className="dim-before">{d.before}</span>
// // // // // //                       <span className="dim-arrow">
// // // // // //                         <IconArrow />
// // // // // //                       </span>
// // // // // //                       <span className="dim-after">{d.after}</span>
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   <div className="dim-track">
// // // // // //                     <div
// // // // // //                       className="dim-fill"
// // // // // //                       style={filled ? undefined : { width: "0%" }}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <div className="dims-foot">
// // // // // //               <span className="quote-icon">
// // // // // //                 <IconQuote />
// // // // // //               </span>
// // // // // //               <p className="quote-text">
// // // // // //                 <span className="swap-before">
// // // // // //                   The dashed line marks where each thread of the bond started.{" "}
// // // // // //                   <b>Before, the words came out sharp</b> and the moment closed
// // // // // //                   before it ever opened.
// // // // // //                 </span>
// // // // // //                 <span className="swap-after">
// // // // // //                   Same child, same ten minutes a day.{" "}
// // // // // //                   <b>You respond instead of react</b> — and every thread of the
// // // // // //                   bond climbs into the Thriving zone.
// // // // // //                 </span>
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Benefits */}
// // // // // //         <div className="benefits">
// // // // // //           {BENEFITS.map((b) => (
// // // // // //             <div key={b.title} className="benefit">
// // // // // //               <div className="benefit-icon">
// // // // // //                 <IconStar />
// // // // // //               </div>
// // // // // //               <h3 className="benefit-title">{b.title}</h3>
// // // // // //               <p className="benefit-body">{b.body}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         <p className="bottom-line">
// // // // // //           10 minutes a day. One deed. Three lives transformed.
// // // // // //         </p>

// // // // // //         <div className="cta-wrap">
// // // // // //           <button className="cta"  onClick={() => router.push("/download-app")}>
// // // // // //             Start the transformation <IconArrowRight />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .uxform {
// // // // // //           --text-primary: #ffffff;
// // // // // //           --text-secondary: #c3c2ce;
// // // // // //           --text-muted: #8b8a98;
// // // // // //           --text-faint: #5c5b68;
// // // // // //           --orange-glow: #ff9a40;
// // // // // //           --orange-text: #ffb36b;
// // // // // //           --orange-deep: #ff7a18;
// // // // // //           --headline-gradient: linear-gradient(
// // // // // //             100deg,
// // // // // //             #ffb13d 0%,
// // // // // //             #ff7a18 26%,
// // // // // //             #ff4d8d 64%,
// // // // // //             #a24bff 100%
// // // // // //           );
// // // // // //           --bar-gradient: linear-gradient(
// // // // // //             90deg,
// // // // // //             #ffb13d 0%,
// // // // // //             #ff7a18 35%,
// // // // // //             #ff4d8d 72%,
// // // // // //             #a24bff 100%
// // // // // //           );
// // // // // //           --cta-gradient: linear-gradient(
// // // // // //             172deg,
// // // // // //             #ffae57 0%,
// // // // // //             #ff8a2e 40%,
// // // // // //             #fb6e11 100%
// // // // // //           );
// // // // // //           --toggle-gradient: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%);
// // // // // //           --accent-gradient: linear-gradient(
// // // // // //             135deg,
// // // // // //             #ff9a40 0%,
// // // // // //             #ff7a18 28%,
// // // // // //             #ff4d8d 62%,
// // // // // //             #a24bff 100%
// // // // // //           );
// // // // // //           --lg-bg: rgba(255, 255, 255, 0.04);
// // // // // //           --lg-border-color: rgba(255, 255, 255, 0.1);
// // // // // //           --lg-blur: 50px;
// // // // // //           --lg-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
// // // // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.04),
// // // // // //             0 18px 50px rgba(0, 0, 0, 0.3);
// // // // // //           --lg-shadow-hover: inset 0 1px 0 rgba(255, 255, 255, 0.18),
// // // // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.06),
// // // // // //             0 32px 80px rgba(0, 0, 0, 0.45), 0 0 60px rgba(255, 154, 64, 0.08);
// // // // // //           --container-max: 1280px;
// // // // // //           --side-pad: clamp(20px, 3.2vw, 40px);

// // // // // //           position: relative;
// // // // // //           width: 100%;
// // // // // //           padding: 0 0 clamp(48px, 7vh, 96px);
// // // // // //           overflow: hidden;
// // // // // //           background: #050507;
// // // // // //           color: var(--text-primary);
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           -webkit-font-smoothing: antialiased;
// // // // // //         }

// // // // // //         /* Ticker */
// // // // // //         .ticker {
// // // // // //           position: relative;
// // // // // //           z-index: 2;
// // // // // //           width: 100%;
// // // // // //           overflow: hidden;
// // // // // //           border-top: 1px solid rgba(255, 255, 255, 0.1);
// // // // // //           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// // // // // //           background: linear-gradient(
// // // // // //             180deg,
// // // // // //             rgba(255, 122, 24, 0.05) 0%,
// // // // // //             rgba(255, 122, 24, 0.01) 100%
// // // // // //           );
// // // // // //           padding: 18px 0;
// // // // // //           margin-bottom: clamp(64px, 9vh, 130px);
// // // // // //           -webkit-mask-image: linear-gradient(
// // // // // //             90deg,
// // // // // //             transparent,
// // // // // //             #000 7%,
// // // // // //             #000 93%,
// // // // // //             transparent
// // // // // //           );
// // // // // //           mask-image: linear-gradient(
// // // // // //             90deg,
// // // // // //             transparent,
// // // // // //             #000 7%,
// // // // // //             #000 93%,
// // // // // //             transparent
// // // // // //           );
// // // // // //         }
// // // // // //         .ticker-track {
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 26px;
// // // // // //           white-space: nowrap;
// // // // // //           will-change: transform;
// // // // // //           animation: ux-ticker 40s linear infinite;
// // // // // //         }
// // // // // //         .ticker-group {
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 26px;
// // // // // //         }
// // // // // //         .ticker-item {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 700;
// // // // // //           font-size: clamp(16px, 2vw, 26px);
// // // // // //           letter-spacing: 0.26px;
// // // // // //           color: var(--text-secondary);
// // // // // //         }
// // // // // //         .ticker-item.accent {
// // // // // //           color: var(--orange-glow);
// // // // // //         }
// // // // // //         .ticker-item.white {
// // // // // //           color: #ffffff;
// // // // // //         }
// // // // // //         .ticker-star {
// // // // // //           color: var(--orange-deep);
// // // // // //           font-size: clamp(13px, 1.56vw, 20px);
// // // // // //         }
// // // // // //         @keyframes ux-ticker {
// // // // // //           from {
// // // // // //             transform: translateX(0);
// // // // // //           }
// // // // // //           to {
// // // // // //             transform: translateX(-50%);
// // // // // //           }
// // // // // //         }

// // // // // //         .transform-inner {
// // // // // //           position: relative;
// // // // // //           z-index: 1;
// // // // // //           max-width: var(--container-max);
// // // // // //           margin: 0 auto;
// // // // // //           padding: 0 var(--side-pad);
// // // // // //         }

// // // // // //         /* Pill */
// // // // // //         .pill-wrap {
// // // // // //           display: flex;
// // // // // //           justify-content: center;
// // // // // //           margin-bottom: 26px;
// // // // // //         }
// // // // // //         .pill {
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 10px;
// // // // // //           height: 36px;
// // // // // //           padding: 0 18px;
// // // // // //           border-radius: 999px;
// // // // // //           border: 1.029px solid rgba(255, 154, 64, 0.25);
// // // // // //           background: linear-gradient(
// // // // // //             180deg,
// // // // // //             rgba(255, 154, 64, 0.03) 0%,
// // // // // //             rgba(255, 122, 24, 0.01) 100%
// // // // // //           );
// // // // // //           box-shadow: inset 0 1.029px 0 rgba(255, 255, 255, 0.16);
// // // // // //         }
// // // // // //         .pill-dot {
// // // // // //           width: 7.2px;
// // // // // //           height: 7.2px;
// // // // // //           border-radius: 3.6px;
// // // // // //           background: var(--orange-glow);
// // // // // //           box-shadow: 0 0 8.229px var(--orange-glow);
// // // // // //         }
// // // // // //         .pill-text {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 12.343px;
// // // // // //           color: var(--orange-text);
// // // // // //           letter-spacing: 1.9749px;
// // // // // //           text-transform: uppercase;
// // // // // //         }

// // // // // //         /* Heading */
// // // // // //         .heading {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 800;
// // // // // //           font-size: clamp(30px, 4.7vw, 60px);
// // // // // //           line-height: 1.02;
// // // // // //           letter-spacing: -1.2px;
// // // // // //           text-align: center;
// // // // // //           color: #fff;
// // // // // //           margin: 0 auto 22px;
// // // // // //           max-width: 760px;
// // // // // //         }
// // // // // //         .heading .gradient {
// // // // // //           background: var(--headline-gradient);
// // // // // //           -webkit-background-clip: text;
// // // // // //           background-clip: text;
// // // // // //           -webkit-text-fill-color: transparent;
// // // // // //           color: transparent;
// // // // // //         }
// // // // // //         .sub {
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           font-weight: 400;
// // // // // //           font-size: clamp(15px, 1.56vw, 20px);
// // // // // //           line-height: 1.62;
// // // // // //           color: var(--text-muted);
// // // // // //           text-align: center;
// // // // // //           max-width: 760px;
// // // // // //           margin: 0 auto 36px;
// // // // // //         }

// // // // // //         /* Toggle */
// // // // // //         .toggle-wrap {
// // // // // //           display: flex;
// // // // // //           justify-content: center;
// // // // // //           margin-bottom: 44px;
// // // // // //         }
// // // // // //         .toggle {
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           height: 57px;
// // // // // //           padding: 6px;
// // // // // //           border-radius: 999px;
// // // // // //           border: 1px solid rgba(255, 255, 255, 0.1);
// // // // // //           background: rgba(255, 255, 255, 0.04);
// // // // // //           backdrop-filter: blur(7px);
// // // // // //           -webkit-backdrop-filter: blur(7px);
// // // // // //           max-width: 100%;
// // // // // //         }
// // // // // //         .toggle-btn {
// // // // // //           position: relative;
// // // // // //           height: 43px;
// // // // // //           border: none;
// // // // // //           border-radius: 999px;
// // // // // //           background: transparent;
// // // // // //           cursor: pointer;
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           gap: 8px;
// // // // // //           padding: 0 22px;
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 700;
// // // // // //           font-size: 14.5px;
// // // // // //           color: var(--text-muted);
// // // // // //           overflow: hidden;
// // // // // //           white-space: nowrap;
// // // // // //           transition: color 0.4s ease, background 0.4s ease;
// // // // // //         }
// // // // // //         .toggle-btn :global(svg) {
// // // // // //           width: 15px;
// // // // // //           height: 15px;
// // // // // //           flex-shrink: 0;
// // // // // //         }

// // // // // //         :global([data-state="before"]) .toggle-btn[data-tab="before"] {
// // // // // //           background: rgba(255, 255, 255, 0.1);
// // // // // //           color: #fff;
// // // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
// // // // // //         }
// // // // // //         :global([data-state="after"]) .toggle-btn[data-tab="after"] {
// // // // // //           background: var(--toggle-gradient);
// // // // // //           color: #fff;
// // // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
// // // // // //         }

// // // // // //         .toggle-btn[data-tab="after"] .shimmer {
// // // // // //           position: absolute;
// // // // // //           top: 0;
// // // // // //           left: -120%;
// // // // // //           width: 70%;
// // // // // //           height: 100%;
// // // // // //           background: linear-gradient(
// // // // // //             100deg,
// // // // // //             transparent 0%,
// // // // // //             rgba(255, 174, 87, 0) 20%,
// // // // // //             rgba(255, 174, 87, 0.55) 50%,
// // // // // //             rgba(255, 174, 87, 0) 80%,
// // // // // //             transparent 100%
// // // // // //           );
// // // // // //           pointer-events: none;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .toggle-btn[data-tab="after"] .shimmer {
// // // // // //           animation: ux-shimmer 2.4s ease-in-out infinite;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .toggle-btn[data-tab="after"] {
// // // // // //           animation: ux-after-pulse 2.4s ease-in-out infinite;
// // // // // //         }
// // // // // //         :global(.shimmer-off) .toggle-btn[data-tab="after"] .shimmer {
// // // // // //           display: none !important;
// // // // // //           animation: none !important;
// // // // // //         }
// // // // // //         :global(.shimmer-off) .toggle-btn[data-tab="after"] {
// // // // // //           animation: none !important;
// // // // // //         }
// // // // // //         @keyframes ux-shimmer {
// // // // // //           0% {
// // // // // //             left: -120%;
// // // // // //           }
// // // // // //           60% {
// // // // // //             left: 130%;
// // // // // //           }
// // // // // //           100% {
// // // // // //             left: 130%;
// // // // // //           }
// // // // // //         }
// // // // // //         @keyframes ux-after-pulse {
// // // // // //           0%,
// // // // // //           100% {
// // // // // //             color: var(--orange-text);
// // // // // //           }
// // // // // //           50% {
// // // // // //             color: #ffd9ad;
// // // // // //           }
// // // // // //         }

// // // // // //         /* Cards grid */
// // // // // //         .cards-grid {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
// // // // // //           gap: 24px;
// // // // // //           margin-bottom: 24px;
// // // // // //           align-items: stretch;
// // // // // //         }

// // // // // //         .glass-card {
// // // // // //           position: relative;
// // // // // //           border-radius: 36px;
// // // // // //           border: 1px solid var(--lg-border-color);
// // // // // //           background: var(--lg-bg);
// // // // // //           backdrop-filter: blur(var(--lg-blur));
// // // // // //           -webkit-backdrop-filter: blur(var(--lg-blur));
// // // // // //           box-shadow: var(--lg-shadow);
// // // // // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // //             box-shadow 0.5s ease;
// // // // // //         }
// // // // // //         .glass-card:hover {
// // // // // //           transform: translateY(-4px);
// // // // // //           box-shadow: var(--lg-shadow-hover);
// // // // // //         }

// // // // // //         .card-label {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 10px;
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 12px;
// // // // // //           letter-spacing: 1.68px;
// // // // // //           text-transform: uppercase;
// // // // // //           color: var(--text-muted);
// // // // // //         }
// // // // // //         .card-label::before {
// // // // // //           content: "";
// // // // // //           width: 8px;
// // // // // //           height: 8px;
// // // // // //           border-radius: 4px;
// // // // // //           background: var(--orange-glow);
// // // // // //           box-shadow: 0 0 10px var(--orange-glow);
// // // // // //         }

// // // // // //         /* Bond gauge */
// // // // // //         .bond-card {
// // // // // //           padding: 36px 40px 40px;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //         }
// // // // // //         .gauge-wrap {
// // // // // //           position: relative;
// // // // // //           width: 100%;
// // // // // //           max-width: 360px;
// // // // // //           margin: 28px auto 0;
// // // // // //           aspect-ratio: 1 / 1;
// // // // // //         }
// // // // // //         .gauge-svg {
// // // // // //           width: 100%;
// // // // // //           height: 100%;
// // // // // //           transform: rotate(-90deg);
// // // // // //         }
// // // // // //         .gauge-track {
// // // // // //           fill: none;
// // // // // //           stroke: rgba(255, 255, 255, 0.06);
// // // // // //           stroke-width: 16;
// // // // // //         }
// // // // // //         .gauge-val {
// // // // // //           fill: none;
// // // // // //           stroke-width: 16;
// // // // // //           stroke-linecap: round;
// // // // // //           stroke: var(--gauge-stroke);
// // // // // //           stroke-dasharray: 628.318;
// // // // // //           stroke-dashoffset: var(--gauge-off);
// // // // // //           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
// // // // // //         }
// // // // // //         :global([data-state="before"]) {
// // // // // //           --gauge-stroke: url(#uxGradBefore);
// // // // // //           --gauge-off: 496.4;
// // // // // //         }
// // // // // //         :global([data-state="after"]) {
// // // // // //           --gauge-stroke: url(#uxGradAfter);
// // // // // //           --gauge-off: 81.7;
// // // // // //         }

// // // // // //         .planet {
// // // // // //           position: absolute;
// // // // // //           top: 50%;
// // // // // //           left: 50%;
// // // // // //           transform: translate(-50%, -50%);
// // // // // //           width: 62%;
// // // // // //           aspect-ratio: 1/1;
// // // // // //           border-radius: 50%;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           line-height: 1;
// // // // // //           transition: background 0.8s ease, box-shadow 0.8s ease;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .planet {
// // // // // //           background: radial-gradient(
// // // // // //             circle at 38% 32%,
// // // // // //             #3a3850 0%,
// // // // // //             #2a2940 45%,
// // // // // //             #1c1b2c 100%
// // // // // //           );
// // // // // //           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6),
// // // // // //             inset 8px 10px 28px rgba(150, 148, 196, 0.18);
// // // // // //         }
// // // // // //         :global([data-state="after"]) .planet {
// // // // // //           background: radial-gradient(
// // // // // //             circle at 38% 32%,
// // // // // //             #ffe4c2 0%,
// // // // // //             #ffcc97 9%,
// // // // // //             #ffb36b 18%,
// // // // // //             #ff9a40 40%,
// // // // // //             #ff8a2c 51%,
// // // // // //             #ff7a18 62%,
// // // // // //             #c9510a 84%,
// // // // // //             #a24208 92%,
// // // // // //             #7a3206 100%
// // // // // //           );
// // // // // //           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5),
// // // // // //             inset -10px -14px 36px rgba(70, 18, 0, 0.55),
// // // // // //             inset 8px 10px 28px rgba(255, 224, 180, 0.45);
// // // // // //         }
// // // // // //         .planet-score {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 800;
// // // // // //           font-size: clamp(40px, 5.6vw, 56px);
// // // // // //           line-height: 1;
// // // // // //           letter-spacing: -1.6px;
// // // // // //           color: #fff;
// // // // // //           text-shadow: 0 2px 14px rgba(80, 24, 0, 0.5);
// // // // // //         }
// // // // // //         .planet-total {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 700;
// // // // // //           font-size: 13px;
// // // // // //           color: rgba(255, 255, 255, 0.6);
// // // // // //           margin-top: 4px;
// // // // // //         }
// // // // // //         .planet-badge {
// // // // // //           margin-top: 12px;
// // // // // //           padding: 5px 13px;
// // // // // //           border-radius: 999px;
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 700;
// // // // // //           font-size: 12px;
// // // // // //           letter-spacing: 1.4px;
// // // // // //           text-transform: uppercase;
// // // // // //           transition: background 0.6s ease, color 0.6s ease;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .planet-badge {
// // // // // //           background: rgba(255, 255, 255, 0.1);
// // // // // //           color: var(--text-secondary);
// // // // // //         }
// // // // // //         :global([data-state="after"]) .planet-badge {
// // // // // //           background: rgba(255, 236, 210, 0.85);
// // // // // //           color: #2a1402;
// // // // // //         }
// // // // // //         :global([data-state="after"]) .planet-badge .swap-before {
// // // // // //           display: none;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .planet-badge .swap-after {
// // // // // //           display: none;
// // // // // //         }

// // // // // //         .zones {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: repeat(3, 1fr);
// // // // // //           gap: 16px;
// // // // // //           margin-top: auto;
// // // // // //           padding-top: 32px;
// // // // // //         }
// // // // // //         .zone {
// // // // // //           position: relative;
// // // // // //           border-radius: 14px;
// // // // // //           border: 1px solid rgba(255, 255, 255, 0.06);
// // // // // //           background: rgba(255, 255, 255, 0.02);
// // // // // //           padding: 16px 10px;
// // // // // //           text-align: center;
// // // // // //           transition: border-color 0.5s ease, background 0.5s ease;
// // // // // //         }
// // // // // //         .zone-name {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 700;
// // // // // //           font-size: 14px;
// // // // // //           color: var(--text-muted);
// // // // // //           transition: color 0.5s ease;
// // // // // //         }
// // // // // //         .zone-range {
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           font-weight: 500;
// // // // // //           font-size: 13.5px;
// // // // // //           color: var(--text-faint);
// // // // // //           margin-top: 5px;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"],
// // // // // //         :global([data-state="after"]) .zone[data-zone="thriving"] {
// // // // // //           border-color: transparent;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
// // // // // //         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
// // // // // //           content: "";
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           border-radius: inherit;
// // // // // //           padding: 1px;
// // // // // //           background: var(--accent-gradient);
// // // // // //           -webkit-mask: linear-gradient(#000 0 0) content-box,
// // // // // //             linear-gradient(#000 0 0);
// // // // // //           -webkit-mask-composite: xor;
// // // // // //           mask-composite: exclude;
// // // // // //           pointer-events: none;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
// // // // // //         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name {
// // // // // //           color: var(--orange-text);
// // // // // //         }

// // // // // //         /* Six dimensions */
// // // // // //         .dims-card {
// // // // // //           padding: 36px 40px 32px;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //         }
// // // // // //         .dims-list {
// // // // // //           margin-top: 24px;
// // // // // //           flex: 1;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           justify-content: space-between;
// // // // // //           gap: 18px;
// // // // // //         }
// // // // // //         .dim-row {
// // // // // //           margin-bottom: 0;
// // // // // //         }
// // // // // //         .dim-head {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 9px;
// // // // // //           margin-bottom: 8px;
// // // // // //         }
// // // // // //         .dim-icon {
// // // // // //           width: 18px;
// // // // // //           height: 18px;
// // // // // //           flex-shrink: 0;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //         }
// // // // // //         .dim-name {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 14.5px;
// // // // // //           color: var(--text-secondary);
// // // // // //           flex: 1;
// // // // // //         }
// // // // // //         .dim-vals {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 6px;
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 800;
// // // // // //           font-size: 13px;
// // // // // //         }
// // // // // //         .dim-before {
// // // // // //           color: var(--text-faint);
// // // // // //         }
// // // // // //         .dim-arrow {
// // // // // //           display: inline-flex;
// // // // // //           width: 12px;
// // // // // //           height: 9px;
// // // // // //         }
// // // // // //         .dim-after {
// // // // // //           color: var(--orange-text);
// // // // // //         }

// // // // // //         .dim-track {
// // // // // //           position: relative;
// // // // // //           height: 12px;
// // // // // //           border-radius: 999px;
// // // // // //           background: rgba(255, 255, 255, 0.07);
// // // // // //           overflow: hidden;
// // // // // //         }
// // // // // //         .dim-fill {
// // // // // //           position: absolute;
// // // // // //           inset: 0 auto 0 0;
// // // // // //           height: 100%;
// // // // // //           border-radius: 999px;
// // // // // //           width: var(--w-before);
// // // // // //           transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // //             background 0.6s ease;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .dim-fill {
// // // // // //           width: var(--w-before);
// // // // // //           background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%);
// // // // // //         }
// // // // // //         :global([data-state="after"]) .dim-fill {
// // // // // //           width: var(--w-after);
// // // // // //           background: var(--bar-gradient);
// // // // // //           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
// // // // // //         }

// // // // // //         .dims-foot {
// // // // // //           margin-top: 26px;
// // // // // //           padding-top: 22px;
// // // // // //           border-top: 1px solid rgba(255, 255, 255, 0.06);
// // // // // //           display: flex;
// // // // // //           gap: 12px;
// // // // // //         }
// // // // // //         .quote-icon {
// // // // // //           width: 20px;
// // // // // //           height: 20px;
// // // // // //           flex-shrink: 0;
// // // // // //           margin-top: 2px;
// // // // // //         }
// // // // // //         .quote-text {
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           font-weight: 400;
// // // // // //           font-size: 14.5px;
// // // // // //           line-height: 1.6;
// // // // // //           color: var(--text-muted);
// // // // // //         }
// // // // // //         .quote-text :global(b) {
// // // // // //           font-weight: 600;
// // // // // //           color: #fff;
// // // // // //         }
// // // // // //         .quote-text .swap-before,
// // // // // //         .quote-text .swap-after {
// // // // // //           display: none;
// // // // // //         }
// // // // // //         :global([data-state="before"]) .quote-text .swap-before {
// // // // // //           display: inline;
// // // // // //         }
// // // // // //         :global([data-state="after"]) .quote-text .swap-after {
// // // // // //           display: inline;
// // // // // //         }

// // // // // //         /* Benefits */
// // // // // //         .benefits {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: repeat(3, 1fr);
// // // // // //           gap: 24px;
// // // // // //         }
// // // // // //         .benefit {
// // // // // //           position: relative;
// // // // // //           border-radius: 22px;
// // // // // //           border: 1px solid var(--lg-border-color);
// // // // // //           background: var(--lg-bg);
// // // // // //           backdrop-filter: blur(var(--lg-blur));
// // // // // //           -webkit-backdrop-filter: blur(var(--lg-blur));
// // // // // //           box-shadow: var(--lg-shadow);
// // // // // //           padding: 28px;
// // // // // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // //             box-shadow 0.5s ease;
// // // // // //         }
// // // // // //         .benefit:hover {
// // // // // //           transform: translateY(-4px);
// // // // // //           box-shadow: var(--lg-shadow-hover);
// // // // // //         }
// // // // // //         .benefit-icon {
// // // // // //           position: relative;
// // // // // //           width: 54px;
// // // // // //           height: 54px;
// // // // // //           border-radius: 15px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           margin-bottom: 30px;
// // // // // //         }
// // // // // //         .benefit-icon::before {
// // // // // //           content: "";
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           border-radius: inherit;
// // // // // //           padding: 1px;
// // // // // //           background: var(--accent-gradient);
// // // // // //           -webkit-mask: linear-gradient(#000 0 0) content-box,
// // // // // //             linear-gradient(#000 0 0);
// // // // // //           -webkit-mask-composite: xor;
// // // // // //           mask-composite: exclude;
// // // // // //           pointer-events: none;
// // // // // //         }
// // // // // //         .benefit-title {
// // // // // //           font-family: "Outfit", sans-serif;
// // // // // //           font-weight: 700;
// // // // // //           font-size: 20px;
// // // // // //           color: #fff;
// // // // // //           margin-bottom: 14px;
// // // // // //         }
// // // // // //         .benefit-body {
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           font-weight: 400;
// // // // // //           font-size: 15px;
// // // // // //           line-height: 1.55;
// // // // // //           color: var(--text-muted);
// // // // // //         }

// // // // // //         /* Bottom line + CTA */
// // // // // //         .bottom-line {
// // // // // //           text-align: center;
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           font-weight: 500;
// // // // // //           font-size: clamp(16px, 1.56vw, 20px);
// // // // // //           line-height: 1.62;
// // // // // //           color: var(--text-muted);
// // // // // //           margin: 40px auto 24px;
// // // // // //         }
// // // // // //         .cta-wrap {
// // // // // //           display: flex;
// // // // // //           justify-content: center;
// // // // // //         }
// // // // // //         .cta {
// // // // // //           height: 61px;
// // // // // //           padding: 0 36px;
// // // // // //           border: none;
// // // // // //           border-radius: 22px;
// // // // // //           cursor: pointer;
// // // // // //           background: var(--cta-gradient);
// // // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.48);
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 12px;
// // // // // //           font-family: "Poppins", sans-serif;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 18px;
// // // // // //           letter-spacing: 0.18px;
// // // // // //           color: #fff;
// // // // // //           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
// // // // // //             filter 0.4s ease;
// // // // // //         }
// // // // // //         .cta:hover {
// // // // // //           transform: translateY(-2px);
// // // // // //           filter: brightness(1.05);
// // // // // //         }

// // // // // //         /* Icon sizing inside the SVG wrappers */
// // // // // //         .dim-icon :global(svg),
// // // // // //         .dim-arrow :global(svg),
// // // // // //         .quote-icon :global(svg),
// // // // // //         .benefit-icon :global(svg),
// // // // // //         .cta :global(svg) {
// // // // // //           display: block;
// // // // // //         }
// // // // // //         .benefit-icon :global(svg) {
// // // // // //           width: 26px;
// // // // // //           height: 26px;
// // // // // //         }
// // // // // //         .cta :global(svg) {
// // // // // //           width: 18px;
// // // // // //           height: 18px;
// // // // // //         }

// // // // // //         /* Responsive */
// // // // // //         @media (max-width: 980px) {
// // // // // //           .cards-grid {
// // // // // //             grid-template-columns: 1fr;
// // // // // //           }
// // // // // //           .benefits {
// // // // // //             grid-template-columns: 1fr;
// // // // // //           }
// // // // // //           .bond-card,
// // // // // //           .dims-card {
// // // // // //             padding: 28px 24px;
// // // // // //           }
// // // // // //           .gauge-wrap {
// // // // // //             max-width: 320px;
// // // // // //           }
// // // // // //         }
// // // // // //         @media (max-width: 560px) {
// // // // // //           .heading {
// // // // // //             font-size: 30px;
// // // // // //           }
// // // // // //           .zones {
// // // // // //             grid-template-columns: repeat(3, 1fr);
// // // // // //             gap: 10px;
// // // // // //           }
// // // // // //           .zone {
// // // // // //             padding: 12px 6px;
// // // // // //           }
// // // // // //           .zone-name {
// // // // // //             font-size: 12.5px;
// // // // // //           }
// // // // // //           .zone-range {
// // // // // //             font-size: 12px;
// // // // // //           }
// // // // // //           .toggle {
// // // // // //             height: auto;
// // // // // //             flex-wrap: nowrap;
// // // // // //           }
// // // // // //           .toggle-btn {
// // // // // //             padding: 0 16px;
// // // // // //             font-size: 13px;
// // // // // //           }
// // // // // //           .cta {
// // // // // //             font-size: 16px;
// // // // // //             padding: 0 26px;
// // // // // //           }
// // // // // //           .bond-card,
// // // // // //           .dims-card {
// // // // // //             padding: 24px 18px;
// // // // // //           }
// // // // // //         }
// // // // // //         @media (max-width: 380px) {
// // // // // //           .toggle-btn {
// // // // // //             padding: 0 12px;
// // // // // //             font-size: 12px;
// // // // // //             gap: 6px;
// // // // // //           }
// // // // // //           .zones {
// // // // // //             gap: 7px;
// // // // // //           }
// // // // // //           .zone-name {
// // // // // //             font-size: 11.5px;
// // // // // //           }
// // // // // //         }
// // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // //           .ticker-track,
// // // // // //           .toggle-btn,
// // // // // //           .toggle-btn .shimmer {
// // // // // //             animation: none !important;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // /* ───────────────────────── Inline icon placeholders ─────────────────────────
// // // // // //    These are simple stand-ins so the section renders without external assets.
// // // // // //    Swap each for your real SVG/<img src="assets/icons/..."> as needed. Note the
// // // // // //    original design flipped icons with scaleY(-1); these are drawn upright, so no
// // // // // //    flip is needed. */

// // // // // // function IconClock() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // //       <circle cx="12" cy="12" r="9" />
// // // // // //       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // function IconSparkle() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 24 24" fill="currentColor">
// // // // // //       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // function IconDot() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 18 18" fill="none">
// // // // // //       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
// // // // // //       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // function IconArrow() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6">
// // // // // //       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // function IconQuote() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 20 20" fill="#ff9a40">
// // // // // //       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // function IconStar() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8">
// // // // // //       <path
// // // // // //         d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z"
// // // // // //         strokeLinejoin="round"
// // // // // //       />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // function IconArrowRight() {
// // // // // //   return (
// // // // // //     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2">
// // // // // //       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }



// // // // // "use client";

// // // // // import { useRouter } from "next/navigation";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // /**
// // // // //  * Transformation ("Bond Meter") — Tailwind-first.
// // // // //  *
// // // // //  * ~70% of styling is Tailwind utility classes (arbitrary values keep the design
// // // // //  * pixel-identical, so no tailwind.config changes needed). A small scoped
// // // // //  * <style jsx> block holds ONLY what Tailwind can't express cleanly:
// // // // //  *   1. @keyframes (ticker, shimmer, pulse)
// // // // //  *   2. [data-state] before/after switching (one attribute flips ~15 properties)
// // // // //  *   3. ticker edge-mask, glass-card multi-layer hover shadow, mask-composite
// // // // //  *      gradient borders (zones + benefit icon)
// // // // //  *
// // // // //  * Fonts: Outfit + Poppins must be loaded globally.
// // // // //  */

// // // // // type State = "before" | "after";

// // // // // const VALUES: Record<State, number> = { before: 210, after: 870 };

// // // // // const DIMENSIONS = [
// // // // //   { name: "Emotional regulation", before: 24, after: 88 },
// // // // //   { name: "Confidence", before: 28, after: 90 },
// // // // //   { name: "Curiosity", before: 22, after: 93 },
// // // // //   { name: "Discipline", before: 26, after: 84 },
// // // // //   { name: "Connection", before: 16, after: 94 },
// // // // //   { name: "Resilience", before: 20, after: 89 },
// // // // // ];

// // // // // const BENEFITS = [
// // // // //   {
// // // // //     title: "You stop yelling",
// // // // //     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
// // // // //   },
// // // // //   {
// // // // //     title: "They start talking",
// // // // //     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
// // // // //   },
// // // // //   {
// // // // //     title: "You grow together",
// // // // //     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
// // // // //   },
// // // // // ];

// // // // // const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// // // // // export default function Transformation() {
// // // // //   const sectionRef = useRef<HTMLElement | null>(null);
// // // // //   const [state, setState] = useState<State>("before");
// // // // //   const [shimmerKilled, setShimmerKilled] = useState(false);
// // // // //   const [displayNum, setDisplayNum] = useState(VALUES.before);
// // // // //   const rafRef = useRef<number | null>(null);
// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     const target = VALUES[state];
// // // // //     const start = displayNum;
// // // // //     const startT = performance.now();
// // // // //     const dur = 1100;
// // // // //     const step = (now: number) => {
// // // // //       const p = Math.min((now - startT) / dur, 1);
// // // // //       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
// // // // //       setDisplayNum(Math.round(start + (target - start) * e));
// // // // //       if (p < 1) rafRef.current = requestAnimationFrame(step);
// // // // //     };
// // // // //     rafRef.current = requestAnimationFrame(step);
// // // // //     return () => {
// // // // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // // // //     };
// // // // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // // //   }, [state]);

// // // // //   const [filled, setFilled] = useState(false);
// // // // //   useEffect(() => {
// // // // //     const el = sectionRef.current;
// // // // //     if (!el || !("IntersectionObserver" in window)) {
// // // // //       setFilled(true);
// // // // //       return;
// // // // //     }
// // // // //     const io = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((en) => {
// // // // //           if (en.isIntersecting) {
// // // // //             setFilled(true);
// // // // //             io.disconnect();
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { threshold: 0.25 }
// // // // //     );
// // // // //     io.observe(el);
// // // // //     return () => io.disconnect();
// // // // //   }, []);

// // // // //   const handleToggle = (next: State) => {
// // // // //     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
// // // // //     setState(next);
// // // // //   };

// // // // //   return (
// // // // //     <section
// // // // //       ref={sectionRef}
// // // // //       id="transformations"
// // // // //       data-state={state}
// // // // //       className={`uxform relative w-full overflow-hidden bg-[#050507] pb-[clamp(48px,7vh,96px)] font-['Poppins',sans-serif] text-white antialiased ${
// // // // //         shimmerKilled ? "shimmer-off" : ""
// // // // //       }`}
// // // // //     >
// // // // //       {/* Ticker marquee */}
// // // // //       <div className="tk relative z-[2] mb-[clamp(64px,9vh,130px)] w-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[18px]">
// // // // //         <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
// // // // //           {Array.from({ length: 8 }).map((_, i) => (
// // // // //             <span key={i} className="inline-flex items-center gap-[26px]">
// // // // //               <span
// // // // //                 className={`font-['Outfit',sans-serif] text-[clamp(16px,2vw,26px)] font-bold tracking-[0.26px] ${
// // // // //                   i % 2 === 0 ? "text-[#ff9a40]" : "text-white"
// // // // //                 }`}
// // // // //               >
// // // // //                 {TICKER_LINE}
// // // // //               </span>
// // // // //               <span className="text-[clamp(13px,1.56vw,20px)] text-[#ff7a18]">✦</span>
// // // // //             </span>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,3.2vw,40px)]">
// // // // //         {/* Pill */}
// // // // //         <div className="mb-[26px] flex justify-center">
// // // // //           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
// // // // //             <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
// // // // //             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
// // // // //               The Transformation
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Heading */}
// // // // //         <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(30px,4.7vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white">
// // // // //           The same child.
// // // // //           <br />
// // // // //           <span className="bg-[linear-gradient(100deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)] bg-clip-text text-transparent">
// // // // //             An entirely different bond.
// // // // //           </span>
// // // // //         </h2>

// // // // //         <p className="mx-auto mb-9 max-w-[760px] text-center text-[clamp(15px,1.56vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
// // // // //           Watch your family&apos;s Bond Meter climb as your child grows. From
// // // // //           distant and distracted to confident, curious, and connected — measured
// // // // //           in real moments, not in time.
// // // // //         </p>

// // // // //         {/* Toggle */}
// // // // //         <div className="mb-11 flex justify-center">
// // // // //           <div className="inline-flex h-[57px] max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-[7px] max-[560px]:h-auto">
// // // // //             <button
// // // // //               data-tab="before"
// // // // //               role="tab"
// // // // //               aria-selected={state === "before"}
// // // // //               onClick={() => handleToggle("before")}
// // // // //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// // // // //             >
// // // // //               <IconClock />
// // // // //               Before
// // // // //             </button>
// // // // //             <button
// // // // //               data-tab="after"
// // // // //               role="tab"
// // // // //               aria-selected={state === "after"}
// // // // //               onClick={() => handleToggle("after")}
// // // // //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// // // // //             >
// // // // //               <span className="shimmer pointer-events-none absolute left-[-120%] top-0 h-full w-[70%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,174,87,0)_20%,rgba(255,174,87,0.55)_50%,rgba(255,174,87,0)_80%,transparent_100%)]" />
// // // // //               <IconSparkle />
// // // // //               After UltiMate
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Cards grid */}
// // // // //         <div className="mb-6 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
// // // // //           {/* LEFT */}
// // // // //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_40px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// // // // //             <Label>Bond Meter</Label>

// // // // //             <div className="relative mx-auto mt-7 aspect-square w-full max-w-[360px] max-[980px]:max-w-[320px]">
// // // // //               <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
// // // // //                 <defs>
// // // // //                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // //                     <stop offset="0%" stopColor="#ffb13d" />
// // // // //                     <stop offset="35%" stopColor="#ff7a18" />
// // // // //                     <stop offset="72%" stopColor="#ff4d8d" />
// // // // //                     <stop offset="100%" stopColor="#a24bff" />
// // // // //                   </linearGradient>
// // // // //                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
// // // // //                     <stop offset="0%" stopColor="#8d8ab8" />
// // // // //                     <stop offset="100%" stopColor="#a29fce" />
// // // // //                   </linearGradient>
// // // // //                 </defs>
// // // // //                 <circle cx="120" cy="120" r="100" className="fill-none stroke-white/[0.06] [stroke-width:16]" />
// // // // //                 <circle cx="120" cy="120" r="100" className="gauge-val" />
// // // // //               </svg>

// // // // //               <div className="planet absolute left-1/2 top-1/2 flex aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full leading-none">
// // // // //                 <div className="font-['Outfit',sans-serif] text-[clamp(40px,5.6vw,56px)] font-extrabold leading-none tracking-[-1.6px] text-white [text-shadow:0_2px_14px_rgba(80,24,0,0.5)]">
// // // // //                   {displayNum}
// // // // //                 </div>
// // // // //                 <div className="mt-1 font-['Outfit',sans-serif] text-[13px] font-bold text-white/60">/ 1000</div>
// // // // //                 <div className="planet-badge mt-3 rounded-full px-[13px] py-[5px] font-['Outfit',sans-serif] text-[12px] font-bold uppercase tracking-[1.4px]">
// // // // //                   <span className="swap-before">Disconnected</span>
// // // // //                   <span className="swap-after">Thriving</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="mt-auto grid grid-cols-3 gap-4 pt-8 max-[560px]:gap-2.5">
// // // // //               <Zone zone="disconnected" name="Disconnected" range="0–333" />
// // // // //               <Zone zone="connected" name="Connected" range="334–666" />
// // // // //               <Zone zone="thriving" name="Thriving" range="667–1000" />
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* RIGHT */}
// // // // //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_32px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// // // // //             <Label>Six dimensions of the bond</Label>

// // // // //             <div className="mt-6 flex flex-1 flex-col justify-between gap-[18px]">
// // // // //               {DIMENSIONS.map((d) => (
// // // // //                 <div
// // // // //                   key={d.name}
// // // // //                   style={{ "--w-before": `${d.before}%`, "--w-after": `${d.after}%` } as React.CSSProperties}
// // // // //                 >
// // // // //                   <div className="mb-2 flex items-center gap-[9px]">
// // // // //                     <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center">
// // // // //                       <IconDot />
// // // // //                     </span>
// // // // //                     <span className="flex-1 font-['Outfit',sans-serif] text-[14.5px] font-semibold text-[#c3c2ce]">
// // // // //                       {d.name}
// // // // //                     </span>
// // // // //                     <span className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-extrabold">
// // // // //                       <span className="text-[#5c5b68]">{d.before}</span>
// // // // //                       <span className="inline-flex h-[9px] w-3">
// // // // //                         <IconArrow />
// // // // //                       </span>
// // // // //                       <span className="text-[#ffb36b]">{d.after}</span>
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.07]">
// // // // //                     <div className="dim-fill absolute inset-y-0 left-0 h-full rounded-full" style={filled ? undefined : { width: "0%" }} />
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="mt-[26px] flex gap-3 border-t border-white/[0.06] pt-[22px]">
// // // // //               <span className="mt-0.5 h-5 w-5 flex-shrink-0">
// // // // //                 <IconQuote />
// // // // //               </span>
// // // // //               <p className="qt font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.6] text-[#8b8a98]">
// // // // //                 <span className="swap-before">
// // // // //                   The dashed line marks where each thread of the bond started.{" "}
// // // // //                   <b className="font-semibold text-white">Before, the words came out sharp</b> and the
// // // // //                   moment closed before it ever opened.
// // // // //                 </span>
// // // // //                 <span className="swap-after">
// // // // //                   Same child, same ten minutes a day.{" "}
// // // // //                   <b className="font-semibold text-white">You respond instead of react</b> — and every
// // // // //                   thread of the bond climbs into the Thriving zone.
// // // // //                 </span>
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Benefits */}
// // // // //         <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
// // // // //           {BENEFITS.map((b) => (
// // // // //             <div key={b.title} className="card rounded-[22px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[50px]">
// // // // //               <div className="benefit-icon relative mb-[30px] flex h-[54px] w-[54px] items-center justify-center rounded-[15px]">
// // // // //                 <IconStar />
// // // // //               </div>
// // // // //               <h3 className="mb-3.5 font-['Outfit',sans-serif] text-[20px] font-bold text-white">{b.title}</h3>
// // // // //               <p className="font-['Poppins',sans-serif] text-[15px] font-normal leading-[1.55] text-[#8b8a98]">{b.body}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         <p className="mx-auto mb-6 mt-10 text-center font-['Poppins',sans-serif] text-[clamp(16px,1.56vw,20px)] font-medium leading-[1.62] text-[#8b8a98]">
// // // // //           10 minutes a day. One deed. Three lives transformed.
// // // // //         </p>

// // // // //         <div className="flex justify-center">
// // // // //           <button
// // // // //             onClick={() => router.push("/download-app")}
// // // // //             className="inline-flex h-[61px] cursor-pointer items-center gap-3 rounded-[22px] border-0 bg-[linear-gradient(172deg,#ffae57_0%,#ff8a2e_40%,#fb6e11_100%)] px-9 font-['Poppins',sans-serif] text-[18px] font-semibold tracking-[0.18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:brightness-105 max-[560px]:px-[26px] max-[560px]:text-base"
// // // // //           >
// // // // //             Start the transformation <IconArrowRight />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         .card {
// // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
// // // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.3);
// // // // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
// // // // //         }
// // // // //         .card:hover {
// // // // //           transform: translateY(-4px);
// // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
// // // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.45),
// // // // //             0 0 60px rgba(255, 154, 64, 0.08);
// // // // //         }
// // // // //         .tk {
// // // // //           -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// // // // //           mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// // // // //         }
// // // // //         .tk-track { animation: ux-ticker 40s linear infinite; }
// // // // //         @keyframes ux-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

// // // // //         :global([data-state="before"]) .tg-btn[data-tab="before"] {
// // // // //           background: rgba(255, 255, 255, 0.1); color: #fff;
// // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
// // // // //         }
// // // // //         :global([data-state="after"]) .tg-btn[data-tab="after"] {
// // // // //           background: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%); color: #fff;
// // // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
// // // // //         }
// // // // //         :global([data-state="before"]) .tg-btn[data-tab="after"] .shimmer { animation: ux-shimmer 2.4s ease-in-out infinite; }
// // // // //         :global([data-state="before"]) .tg-btn[data-tab="after"] { animation: ux-after-pulse 2.4s ease-in-out infinite; }
// // // // //         :global(.shimmer-off) .tg-btn[data-tab="after"] .shimmer { display: none !important; animation: none !important; }
// // // // //         :global(.shimmer-off) .tg-btn[data-tab="after"] { animation: none !important; }
// // // // //         @keyframes ux-shimmer { 0% { left: -120%; } 60% { left: 130%; } 100% { left: 130%; } }
// // // // //         @keyframes ux-after-pulse { 0%,100% { color: #ffb36b; } 50% { color: #ffd9ad; } }

// // // // //         .gauge-val {
// // // // //           fill: none; stroke-width: 16; stroke-linecap: round;
// // // // //           stroke: var(--gauge-stroke);
// // // // //           stroke-dasharray: 628.318; stroke-dashoffset: var(--gauge-off);
// // // // //           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
// // // // //         }
// // // // //         :global([data-state="before"]) { --gauge-stroke: url(#uxGradBefore); --gauge-off: 496.4; }
// // // // //         :global([data-state="after"]) { --gauge-stroke: url(#uxGradAfter); --gauge-off: 81.7; }

// // // // //         .planet { transition: background 0.8s ease, box-shadow 0.8s ease; }
// // // // //         :global([data-state="before"]) .planet {
// // // // //           background: radial-gradient(circle at 38% 32%, #3a3850 0%, #2a2940 45%, #1c1b2c 100%);
// // // // //           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6), inset 8px 10px 28px rgba(150, 148, 196, 0.18);
// // // // //         }
// // // // //         :global([data-state="after"]) .planet {
// // // // //           background: radial-gradient(circle at 38% 32%, #ffe4c2 0%, #ffcc97 9%, #ffb36b 18%, #ff9a40 40%, #ff8a2c 51%, #ff7a18 62%, #c9510a 84%, #a24208 92%, #7a3206 100%);
// // // // //           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5), inset -10px -14px 36px rgba(70, 18, 0, 0.55), inset 8px 10px 28px rgba(255, 224, 180, 0.45);
// // // // //         }

// // // // //         .planet-badge { transition: background 0.6s ease, color 0.6s ease; }
// // // // //         :global([data-state="before"]) .planet-badge { background: rgba(255, 255, 255, 0.1); color: #c3c2ce; }
// // // // //         :global([data-state="after"]) .planet-badge { background: rgba(255, 236, 210, 0.85); color: #2a1402; }
// // // // //         .planet-badge .swap-before, .planet-badge .swap-after { display: inline; }
// // // // //         :global([data-state="after"]) .planet-badge .swap-before { display: none; }
// // // // //         :global([data-state="before"]) .planet-badge .swap-after { display: none; }

// // // // //         .dim-fill { width: var(--w-before); transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease; }
// // // // //         :global([data-state="before"]) .dim-fill { width: var(--w-before); background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%); }
// // // // //         :global([data-state="after"]) .dim-fill {
// // // // //           width: var(--w-after);
// // // // //           background: linear-gradient(90deg, #ffb13d 0%, #ff7a18 35%, #ff4d8d 72%, #a24bff 100%);
// // // // //           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
// // // // //         }

// // // // //         .qt .swap-before, .qt .swap-after { display: none; }
// // // // //         :global([data-state="before"]) .qt .swap-before { display: inline; }
// // // // //         :global([data-state="after"]) .qt .swap-after { display: inline; }

// // // // //         .benefit-icon::before {
// // // // //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// // // // //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// // // // //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// // // // //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// // // // //         }

// // // // //         @media (prefers-reduced-motion: reduce) {
// // // // //           .tk-track, .tg-btn, .tg-btn .shimmer { animation: none !important; }
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // function Label({ children }: { children: React.ReactNode }) {
// // // // //   return (
// // // // //     <div className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#8b8a98] before:h-2 before:w-2 before:rounded before:bg-[#ff9a40] before:shadow-[0_0_10px_#ff9a40] before:content-['']">
// // // // //       {children}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function Zone({ zone, name, range }: { zone: "disconnected" | "connected" | "thriving"; name: string; range: string }) {
// // // // //   return (
// // // // //     <div
// // // // //       data-zone={zone}
// // // // //       className="zone relative rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-[16px_10px] text-center max-[560px]:p-[12px_6px]"
// // // // //     >
// // // // //       <div className="zone-name font-['Outfit',sans-serif] text-[14px] font-bold text-[#8b8a98] max-[560px]:text-[12.5px] max-[380px]:text-[11.5px]">
// // // // //         {name}
// // // // //       </div>
// // // // //       <div className="mt-[5px] font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#5c5b68] max-[560px]:text-[12px]">
// // // // //         {range}
// // // // //       </div>
// // // // //       <style jsx>{`
// // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"],
// // // // //         :global([data-state="after"]) .zone[data-zone="thriving"] { border-color: transparent; }
// // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
// // // // //         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
// // // // //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// // // // //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// // // // //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// // // // //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// // // // //         }
// // // // //         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
// // // // //         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name { color: #ffb36b; }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function IconClock() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px] flex-shrink-0">
// // // // //       <circle cx="12" cy="12" r="9" />
// // // // //       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
// // // // //     </svg>
// // // // //   );
// // // // // }
// // // // // function IconSparkle() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0">
// // // // //       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
// // // // //     </svg>
// // // // //   );
// // // // // }
// // // // // function IconDot() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 18 18" fill="none" className="block">
// // // // //       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
// // // // //       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
// // // // //     </svg>
// // // // //   );
// // // // // }
// // // // // function IconArrow() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6" className="block">
// // // // //       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
// // // // //     </svg>
// // // // //   );
// // // // // }
// // // // // function IconQuote() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 20 20" fill="#ff9a40" className="block h-full w-full">
// // // // //       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
// // // // //     </svg>
// // // // //   );
// // // // // }
// // // // // function IconStar() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8" className="h-[26px] w-[26px]">
// // // // //       <path d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z" strokeLinejoin="round" />
// // // // //     </svg>
// // // // //   );
// // // // // }
// // // // // function IconArrowRight() {
// // // // //   return (
// // // // //     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2" className="h-[18px] w-[18px]">
// // // // //       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
// // // // //     </svg>
// // // // //   );
// // // // // }








// // // // "use client";

// // // // import { useRouter } from "next/navigation";
// // // // import { useEffect, useRef, useState } from "react";

// // // // /**
// // // //  * Transformation ("Bond Meter") — Tailwind-first.
// // // //  *
// // // //  * ~70% of styling is Tailwind utility classes (arbitrary values keep the design
// // // //  * pixel-identical, so no tailwind.config changes needed). A small scoped
// // // //  * <style jsx> block holds ONLY what Tailwind can't express cleanly:
// // // //  *   1. @keyframes (ticker, shimmer, pulse)
// // // //  *   2. [data-state] before/after switching (one attribute flips ~15 properties)
// // // //  *   3. ticker edge-mask, glass-card multi-layer hover shadow, mask-composite
// // // //  *      gradient borders (zones + benefit icon)
// // // //  *
// // // //  * Fonts: Outfit + Poppins must be loaded globally.
// // // //  */

// // // // type State = "before" | "after";

// // // // const VALUES: Record<State, number> = { before: 210, after: 870 };

// // // // const DIMENSIONS = [
// // // //   { name: "Emotional regulation", before: 24, after: 88 },
// // // //   { name: "Confidence", before: 28, after: 90 },
// // // //   { name: "Curiosity", before: 22, after: 93 },
// // // //   { name: "Discipline", before: 26, after: 84 },
// // // //   { name: "Connection", before: 16, after: 94 },
// // // //   { name: "Resilience", before: 20, after: 89 },
// // // // ];

// // // // const BENEFITS = [
// // // //   {
// // // //     title: "You stop yelling",
// // // //     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
// // // //   },
// // // //   {
// // // //     title: "They start talking",
// // // //     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
// // // //   },
// // // //   {
// // // //     title: "You grow together",
// // // //     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
// // // //   },
// // // // ];

// // // // const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// // // // export default function Transformation() {
// // // //   const sectionRef = useRef<HTMLElement | null>(null);
// // // //   const [state, setState] = useState<State>("before");
// // // //   const [shimmerKilled, setShimmerKilled] = useState(false);
// // // //   const [displayNum, setDisplayNum] = useState(VALUES.before);
// // // //   const rafRef = useRef<number | null>(null);
// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     const target = VALUES[state];
// // // //     const start = displayNum;
// // // //     const startT = performance.now();
// // // //     const dur = 1100;
// // // //     const step = (now: number) => {
// // // //       const p = Math.min((now - startT) / dur, 1);
// // // //       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
// // // //       setDisplayNum(Math.round(start + (target - start) * e));
// // // //       if (p < 1) rafRef.current = requestAnimationFrame(step);
// // // //     };
// // // //     rafRef.current = requestAnimationFrame(step);
// // // //     return () => {
// // // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // // //     };
// // // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // //   }, [state]);

// // // //   const [filled, setFilled] = useState(false);
// // // //   useEffect(() => {
// // // //     const el = sectionRef.current;
// // // //     if (!el || !("IntersectionObserver" in window)) {
// // // //       setFilled(true);
// // // //       return;
// // // //     }
// // // //     const io = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((en) => {
// // // //           if (en.isIntersecting) {
// // // //             setFilled(true);
// // // //             io.disconnect();
// // // //           }
// // // //         });
// // // //       },
// // // //       { threshold: 0.25 }
// // // //     );
// // // //     io.observe(el);
// // // //     return () => io.disconnect();
// // // //   }, []);

// // // //   const handleToggle = (next: State) => {
// // // //     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
// // // //     setState(next);
// // // //   };

// // // //   return (
// // // //     <section
// // // //       ref={sectionRef}
// // // //       id="transformations"
// // // //       data-state={state}
// // // //       className={`uxform relative w-full overflow-hidden bg-[#050507] pb-[clamp(48px,7vh,96px)] font-['Poppins',sans-serif] text-white antialiased ${
// // // //         shimmerKilled ? "shimmer-off" : ""
// // // //       }`}
// // // //     >
// // // //       {/* Ticker marquee */}
// // // //       <div className="tk relative z-[2] mb-[clamp(64px,9vh,130px)] w-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[18px]">
// // // //         <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
// // // //           {Array.from({ length: 8 }).map((_, i) => (
// // // //             <span key={i} className="inline-flex items-center gap-[26px]">
// // // //               <span
// // // //                 className={`font-['Outfit',sans-serif] text-[clamp(16px,2vw,26px)] font-bold tracking-[0.26px] ${
// // // //                   i % 2 === 0 ? "text-[#ff9a40]" : "text-white"
// // // //                 }`}
// // // //               >
// // // //                 {TICKER_LINE}
// // // //               </span>
// // // //               <span className="text-[clamp(13px,1.56vw,20px)] text-[#ff7a18]">✦</span>
// // // //             </span>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,3.2vw,40px)]">
// // // //         {/* Pill */}
// // // //         <div className="mb-[26px] flex justify-center">
// // // //           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
// // // //             <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
// // // //             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
// // // //               The Transformation
// // // //             </span>
// // // //           </div>
// // // //         </div>

// // // //         {/* Heading */}
// // // //         <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(30px,4.7vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white">
// // // //           The same child.
// // // //           <br />
// // // //           <span className="bg-[linear-gradient(100deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)] bg-clip-text text-transparent">
// // // //             An entirely different bond.
// // // //           </span>
// // // //         </h2>

// // // //         <p className="mx-auto mb-9 max-w-[760px] text-center text-[clamp(15px,1.56vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
// // // //           Watch your family&apos;s Bond Meter climb as your child grows. From
// // // //           distant and distracted to confident, curious, and connected — measured
// // // //           in real moments, not in time.
// // // //         </p>

// // // //         {/* Toggle */}
// // // //         <div className="mb-11 flex justify-center">
// // // //           <div className="inline-flex h-[57px] max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-[7px] max-[560px]:h-auto">
// // // //             <button
// // // //               data-tab="before"
// // // //               role="tab"
// // // //               aria-selected={state === "before"}
// // // //               onClick={() => handleToggle("before")}
// // // //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// // // //             >
// // // //               <IconClock />
// // // //               Before
// // // //             </button>
// // // //             <button
// // // //               data-tab="after"
// // // //               role="tab"
// // // //               aria-selected={state === "after"}
// // // //               onClick={() => handleToggle("after")}
// // // //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// // // //             >
// // // //               <span className="shimmer pointer-events-none absolute left-[-120%] top-0 h-full w-[70%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,174,87,0)_20%,rgba(255,174,87,0.55)_50%,rgba(255,174,87,0)_80%,transparent_100%)]" />
// // // //               <IconSparkle />
// // // //               After UltiMate
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Cards grid */}
// // // //         <div className="mb-6 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
// // // //           {/* LEFT */}
// // // //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_40px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// // // //             <Label>Bond Meter</Label>

// // // //             <div className="relative mx-auto mt-7 aspect-square w-full max-w-[360px] max-[980px]:max-w-[320px]">
// // // //               <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
// // // //                 <defs>
// // // //                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
// // // //                     <stop offset="0%" stopColor="#ffb13d" />
// // // //                     <stop offset="35%" stopColor="#ff7a18" />
// // // //                     <stop offset="72%" stopColor="#ff4d8d" />
// // // //                     <stop offset="100%" stopColor="#a24bff" />
// // // //                   </linearGradient>
// // // //                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
// // // //                     <stop offset="0%" stopColor="#8d8ab8" />
// // // //                     <stop offset="100%" stopColor="#a29fce" />
// // // //                   </linearGradient>
// // // //                 </defs>
// // // //                 <circle cx="120" cy="120" r="100" className="fill-none stroke-white/[0.06] [stroke-width:16]" />
// // // //                 <circle cx="120" cy="120" r="100" className="gauge-val" />
// // // //               </svg>

// // // //               <div className="planet absolute left-1/2 top-1/2 flex aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full leading-none">
// // // //                 <div className="font-['Outfit',sans-serif] text-[clamp(40px,5.6vw,56px)] font-extrabold leading-none tracking-[-1.6px] text-white [text-shadow:0_2px_14px_rgba(80,24,0,0.5)]">
// // // //                   {displayNum}
// // // //                 </div>
// // // //                 <div className="mt-1 font-['Outfit',sans-serif] text-[13px] font-bold text-white/60">/ 1000</div>
// // // //                 <div className="planet-badge mt-3 rounded-full px-[13px] py-[5px] font-['Outfit',sans-serif] text-[12px] font-bold uppercase tracking-[1.4px]">
// // // //                   <span className="swap-before">Disconnected</span>
// // // //                   <span className="swap-after">Thriving</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="mt-auto grid grid-cols-3 gap-4 pt-8 max-[560px]:gap-2.5">
// // // //               <Zone zone="disconnected" name="Disconnected" range="0–333" />
// // // //               <Zone zone="connected" name="Connected" range="334–666" />
// // // //               <Zone zone="thriving" name="Thriving" range="667–1000" />
// // // //             </div>
// // // //           </div>

// // // //           {/* RIGHT */}
// // // //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_32px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// // // //             <Label>Six dimensions of the bond</Label>

// // // //             <div className="mt-6 flex flex-1 flex-col justify-between gap-[18px]">
// // // //               {DIMENSIONS.map((d) => (
// // // //                 <div
// // // //                   key={d.name}
// // // //                   style={{ "--w-before": `${d.before}%`, "--w-after": `${d.after}%` } as React.CSSProperties}
// // // //                 >
// // // //                   <div className="mb-2 flex items-center gap-[9px]">
// // // //                     <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center">
// // // //                       <IconDot />
// // // //                     </span>
// // // //                     <span className="flex-1 font-['Outfit',sans-serif] text-[14.5px] font-semibold text-[#c3c2ce]">
// // // //                       {d.name}
// // // //                     </span>
// // // //                     <span className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-extrabold">
// // // //                       <span className="text-[#5c5b68]">{d.before}</span>
// // // //                       <span className="inline-flex h-[9px] w-3">
// // // //                         <IconArrow />
// // // //                       </span>
// // // //                       <span className="text-[#ffb36b]">{d.after}</span>
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.07]">
// // // //                     <div className="dim-fill absolute inset-y-0 left-0 h-full rounded-full" style={filled ? undefined : { width: "0%" }} />
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mt-[26px] flex gap-3 border-t border-white/[0.06] pt-[22px]">
// // // //               <span className="mt-0.5 h-5 w-5 flex-shrink-0">
// // // //                 <IconQuote />
// // // //               </span>
// // // //               <p className="qt font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.6] text-[#8b8a98]">
// // // //                 <span className="swap-before">
// // // //                   The dashed line marks where each thread of the bond started.{" "}
// // // //                   <b className="font-semibold text-white">Before, the words came out sharp</b> and the
// // // //                   moment closed before it ever opened.
// // // //                 </span>
// // // //                 <span className="swap-after">
// // // //                   Same child, same ten minutes a day.{" "}
// // // //                   <b className="font-semibold text-white">You respond instead of react</b> — and every
// // // //                   thread of the bond climbs into the Thriving zone.
// // // //                 </span>
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Benefits */}
// // // //         <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
// // // //           {BENEFITS.map((b) => (
// // // //             <div key={b.title} className="card rounded-[22px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[50px]">
// // // //               <div className="benefit-icon relative mb-[30px] flex h-[54px] w-[54px] items-center justify-center rounded-[15px]">
// // // //                 <IconStar />
// // // //               </div>
// // // //               <h3 className="mb-3.5 font-['Outfit',sans-serif] text-[20px] font-bold text-white">{b.title}</h3>
// // // //               <p className="font-['Poppins',sans-serif] text-[15px] font-normal leading-[1.55] text-[#8b8a98]">{b.body}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Bottom line + CTA overlaid on the TOP of a full-bleed image.
// // // //             The image flows at its natural aspect ratio (so it's fully visible,
// // // //             never cropped), breaks out to full viewport width, and the text+CTA
// // // //             are absolutely positioned over its top area. */}
// // // //         <div className="relative -mt-[clamp(16px,4vw,64px)]">
// // // //           {/* Full-bleed image — natural height, completely visible. */}
// // // //           <div className="pointer-events-none relative left-1/2 -ml-[50vw] w-screen">
// // // //             <img
// // // //               src="/images/transformation/branch.webp"
// // // //               alt=""
// // // //               aria-hidden="true"
// // // //               className="block h-auto w-full"
// // // //               onError={(e) => {
// // // //                 e.currentTarget.style.opacity = "0";
// // // //               }}
// // // //             />
// // // //           </div>

// // // //           {/* Foreground: bottom-line + CTA, pinned over the top of the image */}
// // // //           <div className="absolute inset-x-0 top-0 z-[1] flex flex-col items-center px-[clamp(20px,3.2vw,40px)]">
// // // //             <p className="mx-auto mb-6 max-w-[760px] text-center font-['Poppins',sans-serif] text-[clamp(16px,1.56vw,20px)] font-medium leading-[1.62] text-[#8b8a98]">
// // // //               10 minutes a day. One deed. Three lives transformed.
// // // //             </p>

// // // //             <button
// // // //               onClick={() => router.push("/download-app")}
// // // //               className="inline-flex h-[61px] cursor-pointer items-center gap-3 rounded-[22px] border-0 bg-[linear-gradient(172deg,#ffae57_0%,#ff8a2e_40%,#fb6e11_100%)] px-9 font-['Poppins',sans-serif] text-[18px] font-semibold tracking-[0.18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:brightness-105 max-[560px]:px-[26px] max-[560px]:text-base"
// // // //             >
// // // //               Start the transformation <IconArrowRight />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         .card {
// // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
// // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.3);
// // // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
// // // //         }
// // // //         .card:hover {
// // // //           transform: translateY(-4px);
// // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
// // // //             inset 0 -1px 0 rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.45),
// // // //             0 0 60px rgba(255, 154, 64, 0.08);
// // // //         }
// // // //         .tk {
// // // //           -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// // // //           mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// // // //         }
// // // //         .tk-track { animation: ux-ticker 40s linear infinite; }
// // // //         @keyframes ux-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

// // // //         :global([data-state="before"]) .tg-btn[data-tab="before"] {
// // // //           background: rgba(255, 255, 255, 0.1); color: #fff;
// // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
// // // //         }
// // // //         :global([data-state="after"]) .tg-btn[data-tab="after"] {
// // // //           background: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%); color: #fff;
// // // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
// // // //         }
// // // //         :global([data-state="before"]) .tg-btn[data-tab="after"] .shimmer { animation: ux-shimmer 2.4s ease-in-out infinite; }
// // // //         :global([data-state="before"]) .tg-btn[data-tab="after"] { animation: ux-after-pulse 2.4s ease-in-out infinite; }
// // // //         :global(.shimmer-off) .tg-btn[data-tab="after"] .shimmer { display: none !important; animation: none !important; }
// // // //         :global(.shimmer-off) .tg-btn[data-tab="after"] { animation: none !important; }
// // // //         @keyframes ux-shimmer { 0% { left: -120%; } 60% { left: 130%; } 100% { left: 130%; } }
// // // //         @keyframes ux-after-pulse { 0%,100% { color: #ffb36b; } 50% { color: #ffd9ad; } }

// // // //         .gauge-val {
// // // //           fill: none; stroke-width: 16; stroke-linecap: round;
// // // //           stroke: var(--gauge-stroke);
// // // //           stroke-dasharray: 628.318; stroke-dashoffset: var(--gauge-off);
// // // //           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
// // // //         }
// // // //         :global([data-state="before"]) { --gauge-stroke: url(#uxGradBefore); --gauge-off: 496.4; }
// // // //         :global([data-state="after"]) { --gauge-stroke: url(#uxGradAfter); --gauge-off: 81.7; }

// // // //         .planet { transition: background 0.8s ease, box-shadow 0.8s ease; }
// // // //         :global([data-state="before"]) .planet {
// // // //           background: radial-gradient(circle at 38% 32%, #3a3850 0%, #2a2940 45%, #1c1b2c 100%);
// // // //           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6), inset 8px 10px 28px rgba(150, 148, 196, 0.18);
// // // //         }
// // // //         :global([data-state="after"]) .planet {
// // // //           background: radial-gradient(circle at 38% 32%, #ffe4c2 0%, #ffcc97 9%, #ffb36b 18%, #ff9a40 40%, #ff8a2c 51%, #ff7a18 62%, #c9510a 84%, #a24208 92%, #7a3206 100%);
// // // //           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5), inset -10px -14px 36px rgba(70, 18, 0, 0.55), inset 8px 10px 28px rgba(255, 224, 180, 0.45);
// // // //         }

// // // //         .planet-badge { transition: background 0.6s ease, color 0.6s ease; }
// // // //         :global([data-state="before"]) .planet-badge { background: rgba(255, 255, 255, 0.1); color: #c3c2ce; }
// // // //         :global([data-state="after"]) .planet-badge { background: rgba(255, 236, 210, 0.85); color: #2a1402; }
// // // //         .planet-badge .swap-before, .planet-badge .swap-after { display: inline; }
// // // //         :global([data-state="after"]) .planet-badge .swap-before { display: none; }
// // // //         :global([data-state="before"]) .planet-badge .swap-after { display: none; }

// // // //         .dim-fill { width: var(--w-before); transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease; }
// // // //         :global([data-state="before"]) .dim-fill { width: var(--w-before); background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%); }
// // // //         :global([data-state="after"]) .dim-fill {
// // // //           width: var(--w-after);
// // // //           background: linear-gradient(90deg, #ffb13d 0%, #ff7a18 35%, #ff4d8d 72%, #a24bff 100%);
// // // //           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
// // // //         }

// // // //         .qt .swap-before, .qt .swap-after { display: none; }
// // // //         :global([data-state="before"]) .qt .swap-before { display: inline; }
// // // //         :global([data-state="after"]) .qt .swap-after { display: inline; }

// // // //         .benefit-icon::before {
// // // //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// // // //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// // // //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// // // //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// // // //         }

// // // //         @media (prefers-reduced-motion: reduce) {
// // // //           .tk-track, .tg-btn, .tg-btn .shimmer { animation: none !important; }
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // }

// // // // function Label({ children }: { children: React.ReactNode }) {
// // // //   return (
// // // //     <div className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#8b8a98] before:h-2 before:w-2 before:rounded before:bg-[#ff9a40] before:shadow-[0_0_10px_#ff9a40] before:content-['']">
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // }

// // // // function Zone({ zone, name, range }: { zone: "disconnected" | "connected" | "thriving"; name: string; range: string }) {
// // // //   return (
// // // //     <div
// // // //       data-zone={zone}
// // // //       className="zone relative rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-[16px_10px] text-center max-[560px]:p-[12px_6px]"
// // // //     >
// // // //       <div className="zone-name font-['Outfit',sans-serif] text-[14px] font-bold text-[#8b8a98] max-[560px]:text-[12.5px] max-[380px]:text-[11.5px]">
// // // //         {name}
// // // //       </div>
// // // //       <div className="mt-[5px] font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#5c5b68] max-[560px]:text-[12px]">
// // // //         {range}
// // // //       </div>
// // // //       <style jsx>{`
// // // //         :global([data-state="before"]) .zone[data-zone="disconnected"],
// // // //         :global([data-state="after"]) .zone[data-zone="thriving"] { border-color: transparent; }
// // // //         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
// // // //         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
// // // //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// // // //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// // // //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// // // //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// // // //         }
// // // //         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
// // // //         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name { color: #ffb36b; }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // function IconClock() {
// // // //   return (
// // // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px] flex-shrink-0">
// // // //       <circle cx="12" cy="12" r="9" />
// // // //       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
// // // //     </svg>
// // // //   );
// // // // }
// // // // function IconSparkle() {
// // // //   return (
// // // //     <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0">
// // // //       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
// // // //     </svg>
// // // //   );
// // // // }
// // // // function IconDot() {
// // // //   return (
// // // //     <svg viewBox="0 0 18 18" fill="none" className="block">
// // // //       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
// // // //       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
// // // //     </svg>
// // // //   );
// // // // }
// // // // function IconArrow() {
// // // //   return (
// // // //     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6" className="block">
// // // //       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
// // // //     </svg>
// // // //   );
// // // // }
// // // // function IconQuote() {
// // // //   return (
// // // //     <svg viewBox="0 0 20 20" fill="#ff9a40" className="block h-full w-full">
// // // //       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
// // // //     </svg>
// // // //   );
// // // // }
// // // // function IconStar() {
// // // //   return (
// // // //     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8" className="h-[26px] w-[26px]">
// // // //       <path d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z" strokeLinejoin="round" />
// // // //     </svg>
// // // //   );
// // // // }
// // // // function IconArrowRight() {
// // // //   return (
// // // //     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2" className="h-[18px] w-[18px]">
// // // //       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
// // // //     </svg>
// // // //   );
// // // // }


// // // "use client";

// // // import { useRouter } from "next/navigation";
// // // import { useEffect, useRef, useState } from "react";

// // // /**
// // //  * Transformation ("Bond Meter") — Tailwind-first.
// // //  *
// // //  * ~70% of styling is Tailwind utility classes (arbitrary values keep the design
// // //  * pixel-identical, so no tailwind.config changes needed). A small scoped
// // //  * <style jsx> block holds ONLY what Tailwind can't express cleanly:
// // //  *   1. @keyframes (ticker, shimmer, pulse)
// // //  *   2. [data-state] before/after switching (one attribute flips ~15 properties)
// // //  *   3. ticker edge-mask, glass-card multi-layer hover shadow, mask-composite
// // //  *      gradient borders (zones + benefit icon)
// // //  *
// // //  * Fonts: Outfit + Poppins must be loaded globally.
// // //  */

// // // type State = "before" | "after";

// // // const VALUES: Record<State, number> = { before: 210, after: 870 };

// // // const DIMENSIONS = [
// // //   { name: "Emotional regulation", before: 24, after: 88 },
// // //   { name: "Confidence", before: 28, after: 90 },
// // //   { name: "Curiosity", before: 22, after: 93 },
// // //   { name: "Discipline", before: 26, after: 84 },
// // //   { name: "Connection", before: 16, after: 94 },
// // //   { name: "Resilience", before: 20, after: 89 },
// // // ];

// // // const BENEFITS = [
// // //   {
// // //     title: "You stop yelling",
// // //     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
// // //   },
// // //   {
// // //     title: "They start talking",
// // //     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
// // //   },
// // //   {
// // //     title: "You grow together",
// // //     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
// // //   },
// // // ];

// // // const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// // // export default function Transformation() {
// // //   const sectionRef = useRef<HTMLElement | null>(null);
// // //   const [state, setState] = useState<State>("before");
// // //   const [shimmerKilled, setShimmerKilled] = useState(false);
// // //   const [displayNum, setDisplayNum] = useState(VALUES.before);
// // //   const rafRef = useRef<number | null>(null);
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     const target = VALUES[state];
// // //     const start = displayNum;
// // //     const startT = performance.now();
// // //     const dur = 1100;
// // //     const step = (now: number) => {
// // //       const p = Math.min((now - startT) / dur, 1);
// // //       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
// // //       setDisplayNum(Math.round(start + (target - start) * e));
// // //       if (p < 1) rafRef.current = requestAnimationFrame(step);
// // //     };
// // //     rafRef.current = requestAnimationFrame(step);
// // //     return () => {
// // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // //     };
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, [state]);

// // //   const [filled, setFilled] = useState(false);
// // //   useEffect(() => {
// // //     const el = sectionRef.current;
// // //     if (!el || !("IntersectionObserver" in window)) {
// // //       setFilled(true);
// // //       return;
// // //     }
// // //     const io = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((en) => {
// // //           if (en.isIntersecting) {
// // //             setFilled(true);
// // //             io.disconnect();
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.25 }
// // //     );
// // //     io.observe(el);
// // //     return () => io.disconnect();
// // //   }, []);

// // //   const handleToggle = (next: State) => {
// // //     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
// // //     setState(next);
// // //   };

// // //   return (
// // //     <section
// // //       ref={sectionRef}
// // //       id="transformations"
// // //       data-state={state}
// // //       className={`uxform relative w-full overflow-hidden bg-[#050507] pb-[clamp(48px,7vh,96px)] font-['Poppins',sans-serif] text-white antialiased ${
// // //         shimmerKilled ? "shimmer-off" : ""
// // //       }`}
// // //     >
// // //       {/* Ticker marquee */}
// // //       <div className="tk relative z-[2] mb-[clamp(64px,9vh,130px)] w-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[18px]">
// // //         <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
// // //           {Array.from({ length: 8 }).map((_, i) => (
// // //             <span key={i} className="inline-flex items-center gap-[26px]">
// // //               <span
// // //                 className={`font-['Outfit',sans-serif] text-[clamp(16px,2vw,26px)] font-bold tracking-[0.26px] ${
// // //                   i % 2 === 0 ? "text-[#ff9a40]" : "text-white"
// // //                 }`}
// // //               >
// // //                 {TICKER_LINE}
// // //               </span>
// // //               <span className="text-[clamp(13px,1.56vw,20px)] text-[#ff7a18]">✦</span>
// // //             </span>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,3.2vw,40px)]">
// // //         {/* Pill */}
// // //         <div className="mb-[26px] flex justify-center">
// // //           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
// // //             <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
// // //             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
// // //               The Transformation
// // //             </span>
// // //           </div>
// // //         </div>

// // //         {/* Heading */}
// // //         <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(30px,4.7vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white">
// // //           The same child.
// // //           <br />
// // //           <span className="bg-[linear-gradient(100deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)] bg-clip-text text-transparent">
// // //             An entirely different bond.
// // //           </span>
// // //         </h2>

// // //         <p className="mx-auto mb-9 max-w-[760px] text-center text-[clamp(15px,1.56vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
// // //           Watch your family&apos;s Bond Meter climb as your child grows. From
// // //           distant and distracted to confident, curious, and connected — measured
// // //           in real moments, not in time.
// // //         </p>

// // //         {/* Toggle */}
// // //         <div className="mb-11 flex justify-center">
// // //           <div className="inline-flex h-[57px] max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-[7px] max-[560px]:h-auto">
// // //             <button
// // //               data-tab="before"
// // //               role="tab"
// // //               aria-selected={state === "before"}
// // //               onClick={() => handleToggle("before")}
// // //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// // //             >
// // //               <IconClock />
// // //               Before
// // //             </button>
// // //             <button
// // //               data-tab="after"
// // //               role="tab"
// // //               aria-selected={state === "after"}
// // //               onClick={() => handleToggle("after")}
// // //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// // //             >
// // //               <span className="shimmer pointer-events-none absolute left-[-120%] top-0 h-full w-[70%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,174,87,0)_20%,rgba(255,174,87,0.55)_50%,rgba(255,174,87,0)_80%,transparent_100%)]" />
// // //               <IconSparkle />
// // //               After UltiMate
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Cards grid */}
// // //         <div className="mb-6 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
// // //           {/* LEFT */}
// // //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_40px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// // //             <Label>Bond Meter</Label>

// // //             <div className="relative mx-auto mt-7 aspect-square w-full max-w-[360px] max-[980px]:max-w-[320px]">
// // //               <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
// // //                 <defs>
// // //                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
// // //                     <stop offset="0%" stopColor="#ffb13d" />
// // //                     <stop offset="35%" stopColor="#ff7a18" />
// // //                     <stop offset="72%" stopColor="#ff4d8d" />
// // //                     <stop offset="100%" stopColor="#a24bff" />
// // //                   </linearGradient>
// // //                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
// // //                     <stop offset="0%" stopColor="#8d8ab8" />
// // //                     <stop offset="100%" stopColor="#a29fce" />
// // //                   </linearGradient>
// // //                 </defs>
// // //                 <circle cx="120" cy="120" r="100" className="fill-none stroke-white/[0.06] [stroke-width:16]" />
// // //                 <circle cx="120" cy="120" r="100" className="gauge-val" />
// // //               </svg>

// // //               <div className="planet absolute left-1/2 top-1/2 flex aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full leading-none">
// // //                 <div className="font-['Outfit',sans-serif] text-[clamp(40px,5.6vw,56px)] font-extrabold leading-none tracking-[-1.6px] text-white [text-shadow:0_2px_14px_rgba(80,24,0,0.5)]">
// // //                   {displayNum}
// // //                 </div>
// // //                 <div className="mt-1 font-['Outfit',sans-serif] text-[13px] font-bold text-white/60">/ 1000</div>
// // //                 <div className="planet-badge mt-3 rounded-full px-[13px] py-[5px] font-['Outfit',sans-serif] text-[12px] font-bold uppercase tracking-[1.4px]">
// // //                   <span className="swap-before">Disconnected</span>
// // //                   <span className="swap-after">Thriving</span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="mt-auto grid grid-cols-3 gap-4 pt-8 max-[560px]:gap-2.5">
// // //               <Zone zone="disconnected" name="Disconnected" range="0–333" />
// // //               <Zone zone="connected" name="Connected" range="334–666" />
// // //               <Zone zone="thriving" name="Thriving" range="667–1000" />
// // //             </div>
// // //           </div>

// // //           {/* RIGHT */}
// // //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_32px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// // //             <Label>Six dimensions of the bond</Label>

// // //             <div className="mt-6 flex flex-1 flex-col justify-between gap-[18px]">
// // //               {DIMENSIONS.map((d) => (
// // //                 <div
// // //                   key={d.name}
// // //                   style={{ "--w-before": `${d.before}%`, "--w-after": `${d.after}%` } as React.CSSProperties}
// // //                 >
// // //                   <div className="mb-2 flex items-center gap-[9px]">
// // //                     <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center">
// // //                       <IconDot />
// // //                     </span>
// // //                     <span className="flex-1 font-['Outfit',sans-serif] text-[14.5px] font-semibold text-[#c3c2ce]">
// // //                       {d.name}
// // //                     </span>
// // //                     <span className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-extrabold">
// // //                       <span className="text-[#5c5b68]">{d.before}</span>
// // //                       <span className="inline-flex h-[9px] w-3">
// // //                         <IconArrow />
// // //                       </span>
// // //                       <span className="text-[#ffb36b]">{d.after}</span>
// // //                     </span>
// // //                   </div>
// // //                   <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.07]">
// // //                     <div className="dim-fill absolute inset-y-0 left-0 h-full rounded-full" style={filled ? undefined : { width: "0%" }} />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="mt-[26px] flex gap-3 border-t border-white/[0.06] pt-[22px]">
// // //               <span className="mt-0.5 h-5 w-5 flex-shrink-0">
// // //                 <IconQuote />
// // //               </span>
// // //               <p className="qt font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.6] text-[#8b8a98]">
// // //                 <span className="swap-before">
// // //                   The dashed line marks where each thread of the bond started.{" "}
// // //                   <b className="font-semibold text-white">Before, the words came out sharp</b> and the
// // //                   moment closed before it ever opened.
// // //                 </span>
// // //                 <span className="swap-after">
// // //                   Same child, same ten minutes a day.{" "}
// // //                   <b className="font-semibold text-white">You respond instead of react</b> — and every
// // //                   thread of the bond climbs into the Thriving zone.
// // //                 </span>
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Benefits */}
// // //         <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
// // //           {BENEFITS.map((b) => (
// // //             <div key={b.title} className="card rounded-[22px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[50px]">
// // //               <div className="benefit-icon relative mb-[30px] flex h-[54px] w-[54px] items-center justify-center rounded-[15px]">
// // //                 <IconStar />
// // //               </div>
// // //               <h3 className="mb-3.5 font-['Outfit',sans-serif] text-[20px] font-bold text-white">{b.title}</h3>
// // //               <p className="font-['Poppins',sans-serif] text-[15px] font-normal leading-[1.55] text-[#8b8a98]">{b.body}</p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Bottom line + CTA overlaid on the TOP of a full-bleed image.
// // //             The image flows at its natural aspect ratio (so it's fully visible,
// // //             never cropped), breaks out to full viewport width, and the text+CTA
// // //             are absolutely positioned over its top area. */}
// // //         <div className="relative -mt-[clamp(16px,4vw,64px)]">
// // //           {/* Full-bleed image — natural height, completely visible. */}
// // //           <div className="pointer-events-none relative left-1/2 -ml-[50vw] w-screen">
// // //             <img
// // //               src="/images/transformation/footer.webp"
// // //               alt=""
// // //               aria-hidden="true"
// // //               className="block h-auto w-full"
// // //               onError={(e) => {
// // //                 e.currentTarget.style.opacity = "0";
// // //               }}
// // //             />
// // //           </div>

// // //           {/* Foreground: bottom-line + CTA, pinned over the top of the image */}
// // //           <div className="absolute inset-x-0 top-0 z-[1] flex flex-col items-center px-[clamp(20px,3.2vw,40px)]">
// // //             <p className="mx-auto mb-6 max-w-[760px] text-center font-['Poppins',sans-serif] text-[clamp(16px,1.56vw,20px)] font-medium leading-[1.62] text-[#8b8a98]">
// // //               10 minutes a day. One deed. Three lives transformed.
// // //             </p>

// // //             <button
// // //               onClick={() => router.push("/download-app")}
// // //               className="inline-flex h-[61px] cursor-pointer items-center gap-3 rounded-[22px] border-0 bg-[linear-gradient(172deg,#ffae57_0%,#ff8a2e_40%,#fb6e11_100%)] px-9 font-['Poppins',sans-serif] text-[18px] font-semibold tracking-[0.18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:brightness-105 max-[560px]:px-[26px] max-[560px]:text-base"
// // //             >
// // //               Start the transformation <IconArrowRight />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .card {
// // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
// // //             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.3);
// // //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
// // //         }
// // //         .card:hover {
// // //           transform: translateY(-4px);
// // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
// // //             inset 0 -1px 0 rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.45),
// // //             0 0 60px rgba(255, 154, 64, 0.08);
// // //         }
// // //         .tk {
// // //           -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// // //           mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// // //         }
// // //         .tk-track { animation: ux-ticker 40s linear infinite; }
// // //         @keyframes ux-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

// // //         :global([data-state="before"]) .tg-btn[data-tab="before"] {
// // //           background: rgba(255, 255, 255, 0.1); color: #fff;
// // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
// // //         }
// // //         :global([data-state="after"]) .tg-btn[data-tab="after"] {
// // //           background: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%); color: #fff;
// // //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
// // //         }
// // //         :global([data-state="before"]) .tg-btn[data-tab="after"] .shimmer { animation: ux-shimmer 2.4s ease-in-out infinite; }
// // //         :global([data-state="before"]) .tg-btn[data-tab="after"] { animation: ux-after-pulse 2.4s ease-in-out infinite; }
// // //         :global(.shimmer-off) .tg-btn[data-tab="after"] .shimmer { display: none !important; animation: none !important; }
// // //         :global(.shimmer-off) .tg-btn[data-tab="after"] { animation: none !important; }
// // //         @keyframes ux-shimmer { 0% { left: -120%; } 60% { left: 130%; } 100% { left: 130%; } }
// // //         @keyframes ux-after-pulse { 0%,100% { color: #ffb36b; } 50% { color: #ffd9ad; } }

// // //         .gauge-val {
// // //           fill: none; stroke-width: 16; stroke-linecap: round;
// // //           stroke: var(--gauge-stroke);
// // //           stroke-dasharray: 628.318; stroke-dashoffset: var(--gauge-off);
// // //           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
// // //         }
// // //         :global([data-state="before"]) { --gauge-stroke: url(#uxGradBefore); --gauge-off: 496.4; }
// // //         :global([data-state="after"]) { --gauge-stroke: url(#uxGradAfter); --gauge-off: 81.7; }

// // //         .planet { transition: background 0.8s ease, box-shadow 0.8s ease; }
// // //         :global([data-state="before"]) .planet {
// // //           background: radial-gradient(circle at 38% 32%, #3a3850 0%, #2a2940 45%, #1c1b2c 100%);
// // //           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6), inset 8px 10px 28px rgba(150, 148, 196, 0.18);
// // //         }
// // //         :global([data-state="after"]) .planet {
// // //           background: radial-gradient(circle at 38% 32%, #ffe4c2 0%, #ffcc97 9%, #ffb36b 18%, #ff9a40 40%, #ff8a2c 51%, #ff7a18 62%, #c9510a 84%, #a24208 92%, #7a3206 100%);
// // //           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5), inset -10px -14px 36px rgba(70, 18, 0, 0.55), inset 8px 10px 28px rgba(255, 224, 180, 0.45);
// // //         }

// // //         .planet-badge { transition: background 0.6s ease, color 0.6s ease; }
// // //         :global([data-state="before"]) .planet-badge { background: rgba(255, 255, 255, 0.1); color: #c3c2ce; }
// // //         :global([data-state="after"]) .planet-badge { background: rgba(255, 236, 210, 0.85); color: #2a1402; }
// // //         .planet-badge .swap-before, .planet-badge .swap-after { display: inline; }
// // //         :global([data-state="after"]) .planet-badge .swap-before { display: none; }
// // //         :global([data-state="before"]) .planet-badge .swap-after { display: none; }

// // //         .dim-fill { width: var(--w-before); transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease; }
// // //         :global([data-state="before"]) .dim-fill { width: var(--w-before); background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%); }
// // //         :global([data-state="after"]) .dim-fill {
// // //           width: var(--w-after);
// // //           background: linear-gradient(90deg, #ffb13d 0%, #ff7a18 35%, #ff4d8d 72%, #a24bff 100%);
// // //           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
// // //         }

// // //         .qt .swap-before, .qt .swap-after { display: none; }
// // //         :global([data-state="before"]) .qt .swap-before { display: inline; }
// // //         :global([data-state="after"]) .qt .swap-after { display: inline; }

// // //         .benefit-icon::before {
// // //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// // //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// // //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// // //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// // //         }

// // //         @media (prefers-reduced-motion: reduce) {
// // //           .tk-track, .tg-btn, .tg-btn .shimmer { animation: none !important; }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }

// // // function Label({ children }: { children: React.ReactNode }) {
// // //   return (
// // //     <div className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#8b8a98] before:h-2 before:w-2 before:rounded before:bg-[#ff9a40] before:shadow-[0_0_10px_#ff9a40] before:content-['']">
// // //       {children}
// // //     </div>
// // //   );
// // // }

// // // function Zone({ zone, name, range }: { zone: "disconnected" | "connected" | "thriving"; name: string; range: string }) {
// // //   return (
// // //     <div
// // //       data-zone={zone}
// // //       className="zone relative rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-[16px_10px] text-center max-[560px]:p-[12px_6px]"
// // //     >
// // //       <div className="zone-name font-['Outfit',sans-serif] text-[14px] font-bold text-[#8b8a98] max-[560px]:text-[12.5px] max-[380px]:text-[11.5px]">
// // //         {name}
// // //       </div>
// // //       <div className="mt-[5px] font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#5c5b68] max-[560px]:text-[12px]">
// // //         {range}
// // //       </div>
// // //       <style jsx>{`
// // //         :global([data-state="before"]) .zone[data-zone="disconnected"],
// // //         :global([data-state="after"]) .zone[data-zone="thriving"] { border-color: transparent; }
// // //         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
// // //         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
// // //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// // //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// // //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// // //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// // //         }
// // //         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
// // //         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name { color: #ffb36b; }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // function IconClock() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px] flex-shrink-0">
// // //       <circle cx="12" cy="12" r="9" />
// // //       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // }
// // // function IconSparkle() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0">
// // //       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
// // //     </svg>
// // //   );
// // // }
// // // function IconDot() {
// // //   return (
// // //     <svg viewBox="0 0 18 18" fill="none" className="block">
// // //       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
// // //       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
// // //     </svg>
// // //   );
// // // }
// // // function IconArrow() {
// // //   return (
// // //     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6" className="block">
// // //       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // }
// // // function IconQuote() {
// // //   return (
// // //     <svg viewBox="0 0 20 20" fill="#ff9a40" className="block h-full w-full">
// // //       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
// // //     </svg>
// // //   );
// // // }
// // // function IconStar() {
// // //   return (
// // //     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8" className="h-[26px] w-[26px]">
// // //       <path d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // }
// // // function IconArrowRight() {
// // //   return (
// // //     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2" className="h-[18px] w-[18px]">
// // //       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // }



// // "use client";

// // import { useRouter } from "next/navigation";
// // import { useEffect, useRef, useState } from "react";

// // /**
// //  * Transformation ("Bond Meter") — Tailwind-first.
// //  *
// //  * ~70% of styling is Tailwind utility classes (arbitrary values keep the design
// //  * pixel-identical, so no tailwind.config changes needed). A small scoped
// //  * <style jsx> block holds ONLY what Tailwind can't express cleanly:
// //  *   1. @keyframes (ticker, shimmer, pulse)
// //  *   2. [data-state] before/after switching (one attribute flips ~15 properties)
// //  *   3. ticker edge-mask, glass-card multi-layer hover shadow, mask-composite
// //  *      gradient borders (zones + benefit icon)
// //  *
// //  * Fonts: Outfit + Poppins must be loaded globally.
// //  */

// // type State = "before" | "after";

// // const VALUES: Record<State, number> = { before: 210, after: 870 };

// // const DIMENSIONS = [
// //   { name: "Emotional regulation", before: 24, after: 88 },
// //   { name: "Confidence", before: 28, after: 90 },
// //   { name: "Curiosity", before: 22, after: 93 },
// //   { name: "Discipline", before: 26, after: 84 },
// //   { name: "Connection", before: 16, after: 94 },
// //   { name: "Resilience", before: 20, after: 89 },
// // ];

// // const BENEFITS = [
// //   {
// //     title: "You stop yelling",
// //     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
// //   },
// //   {
// //     title: "They start talking",
// //     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
// //   },
// //   {
// //     title: "You grow together",
// //     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
// //   },
// // ];

// // const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// // export default function Transformation() {
// //   const sectionRef = useRef<HTMLElement | null>(null);
// //   const [state, setState] = useState<State>("before");
// //   const [shimmerKilled, setShimmerKilled] = useState(false);
// //   const [displayNum, setDisplayNum] = useState(VALUES.before);
// //   const rafRef = useRef<number | null>(null);
// //   const router = useRouter();

// //   useEffect(() => {
// //     const target = VALUES[state];
// //     const start = displayNum;
// //     const startT = performance.now();
// //     const dur = 1100;
// //     const step = (now: number) => {
// //       const p = Math.min((now - startT) / dur, 1);
// //       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
// //       setDisplayNum(Math.round(start + (target - start) * e));
// //       if (p < 1) rafRef.current = requestAnimationFrame(step);
// //     };
// //     rafRef.current = requestAnimationFrame(step);
// //     return () => {
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [state]);

// //   const [filled, setFilled] = useState(false);
// //   useEffect(() => {
// //     const el = sectionRef.current;
// //     if (!el || !("IntersectionObserver" in window)) {
// //       setFilled(true);
// //       return;
// //     }
// //     const io = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((en) => {
// //           if (en.isIntersecting) {
// //             setFilled(true);
// //             io.disconnect();
// //           }
// //         });
// //       },
// //       { threshold: 0.25 }
// //     );
// //     io.observe(el);
// //     return () => io.disconnect();
// //   }, []);

// //   const handleToggle = (next: State) => {
// //     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
// //     setState(next);
// //   };

// //   return (
// //     <section
// //       ref={sectionRef}
// //       id="transformations"
// //       data-state={state}
// //       className={`uxform relative w-full overflow-hidden bg-[#050507] pb-[clamp(48px,7vh,96px)] font-['Poppins',sans-serif] text-white antialiased ${
// //         shimmerKilled ? "shimmer-off" : ""
// //       }`}
// //     >
// //       {/* Ticker marquee */}
// //       <div className="tk relative z-[2] mb-[clamp(64px,9vh,130px)] w-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[18px]">
// //         <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
// //           {Array.from({ length: 8 }).map((_, i) => (
// //             <span key={i} className="inline-flex items-center gap-[26px]">
// //               <span
// //                 className={`font-['Outfit',sans-serif] text-[clamp(16px,2vw,26px)] font-bold tracking-[0.26px] ${
// //                   i % 2 === 0 ? "text-[#ff9a40]" : "text-white"
// //                 }`}
// //               >
// //                 {TICKER_LINE}
// //               </span>
// //               <span className="text-[clamp(13px,1.56vw,20px)] text-[#ff7a18]">✦</span>
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,3.2vw,40px)]">
// //         {/* Pill */}
// //         <div className="mb-[26px] flex justify-center">
// //           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
// //             <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
// //             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
// //               The Transformation
// //             </span>
// //           </div>
// //         </div>

// //         {/* Heading */}
// //         <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(30px,4.7vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white">
// //           The same child.
// //           <br />
// //           <span className="bg-[linear-gradient(100deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)] bg-clip-text text-transparent">
// //             An entirely different bond.
// //           </span>
// //         </h2>

// //         <p className="mx-auto mb-9 max-w-[760px] text-center text-[clamp(15px,1.56vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
// //           Watch your family&apos;s Bond Meter climb as your child grows. From
// //           distant and distracted to confident, curious, and connected — measured
// //           in real moments, not in time.
// //         </p>

// //         {/* Toggle */}
// //         <div className="mb-11 flex justify-center">
// //           <div className="inline-flex h-[57px] max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-[7px] max-[560px]:h-auto">
// //             <button
// //               data-tab="before"
// //               role="tab"
// //               aria-selected={state === "before"}
// //               onClick={() => handleToggle("before")}
// //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// //             >
// //               <IconClock />
// //               Before
// //             </button>
// //             <button
// //               data-tab="after"
// //               role="tab"
// //               aria-selected={state === "after"}
// //               onClick={() => handleToggle("after")}
// //               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
// //             >
// //               <span className="shimmer pointer-events-none absolute left-[-120%] top-0 h-full w-[70%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,174,87,0)_20%,rgba(255,174,87,0.55)_50%,rgba(255,174,87,0)_80%,transparent_100%)]" />
// //               <IconSparkle />
// //               After UltiMate
// //             </button>
// //           </div>
// //         </div>

// //         {/* Cards grid */}
// //         <div className="mb-6 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
// //           {/* LEFT */}
// //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_40px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// //             <Label>Bond Meter</Label>

// //             <div className="relative mx-auto mt-7 aspect-square w-full max-w-[360px] max-[980px]:max-w-[320px]">
// //               <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
// //                 <defs>
// //                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
// //                     <stop offset="0%" stopColor="#ffb13d" />
// //                     <stop offset="35%" stopColor="#ff7a18" />
// //                     <stop offset="72%" stopColor="#ff4d8d" />
// //                     <stop offset="100%" stopColor="#a24bff" />
// //                   </linearGradient>
// //                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
// //                     <stop offset="0%" stopColor="#8d8ab8" />
// //                     <stop offset="100%" stopColor="#a29fce" />
// //                   </linearGradient>
// //                 </defs>
// //                 <circle cx="120" cy="120" r="100" className="fill-none stroke-white/[0.06] [stroke-width:16]" />
// //                 <circle cx="120" cy="120" r="100" className="gauge-val" />
// //               </svg>

// //               <div className="planet absolute left-1/2 top-1/2 flex aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full leading-none">
// //                 <div className="font-['Outfit',sans-serif] text-[clamp(40px,5.6vw,56px)] font-extrabold leading-none tracking-[-1.6px] text-white [text-shadow:0_2px_14px_rgba(80,24,0,0.5)]">
// //                   {displayNum}
// //                 </div>
// //                 <div className="mt-1 font-['Outfit',sans-serif] text-[13px] font-bold text-white/60">/ 1000</div>
// //                 <div className="planet-badge mt-3 rounded-full px-[13px] py-[5px] font-['Outfit',sans-serif] text-[12px] font-bold uppercase tracking-[1.4px]">
// //                   <span className="swap-before">Disconnected</span>
// //                   <span className="swap-after">Thriving</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="mt-auto grid grid-cols-3 gap-4 pt-8 max-[560px]:gap-2.5">
// //               <Zone zone="disconnected" name="Disconnected" range="0–333" />
// //               <Zone zone="connected" name="Connected" range="334–666" />
// //               <Zone zone="thriving" name="Thriving" range="667–1000" />
// //             </div>
// //           </div>

// //           {/* RIGHT */}
// //           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_32px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
// //             <Label>Six dimensions of the bond</Label>

// //             <div className="mt-6 flex flex-1 flex-col justify-between gap-[18px]">
// //               {DIMENSIONS.map((d) => (
// //                 <div
// //                   key={d.name}
// //                   style={{ "--w-before": `${d.before}%`, "--w-after": `${d.after}%` } as React.CSSProperties}
// //                 >
// //                   <div className="mb-2 flex items-center gap-[9px]">
// //                     <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center">
// //                       <IconDot />
// //                     </span>
// //                     <span className="flex-1 font-['Outfit',sans-serif] text-[14.5px] font-semibold text-[#c3c2ce]">
// //                       {d.name}
// //                     </span>
// //                     <span className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-extrabold">
// //                       <span className="text-[#5c5b68]">{d.before}</span>
// //                       <span className="inline-flex h-[9px] w-3">
// //                         <IconArrow />
// //                       </span>
// //                       <span className="text-[#ffb36b]">{d.after}</span>
// //                     </span>
// //                   </div>
// //                   <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.07]">
// //                     <div className="dim-fill absolute inset-y-0 left-0 h-full rounded-full" style={filled ? undefined : { width: "0%" }} />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-[26px] flex gap-3 border-t border-white/[0.06] pt-[22px]">
// //               <span className="mt-0.5 h-5 w-5 flex-shrink-0">
// //                 <IconQuote />
// //               </span>
// //               <p className="qt font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.6] text-[#8b8a98]">
// //                 <span className="swap-before">
// //                   The dashed line marks where each thread of the bond started.{" "}
// //                   <b className="font-semibold text-white">Before, the words came out sharp</b> and the
// //                   moment closed before it ever opened.
// //                 </span>
// //                 <span className="swap-after">
// //                   Same child, same ten minutes a day.{" "}
// //                   <b className="font-semibold text-white">You respond instead of react</b> — and every
// //                   thread of the bond climbs into the Thriving zone.
// //                 </span>
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Benefits */}
// //         <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
// //           {BENEFITS.map((b) => (
// //             <div key={b.title} className="card rounded-[22px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[50px]">
// //               <div className="benefit-icon relative mb-[30px] flex h-[54px] w-[54px] items-center justify-center rounded-[15px]">
// //                 <IconStar />
// //               </div>
// //               <h3 className="mb-3.5 font-['Outfit',sans-serif] text-[20px] font-bold text-white">{b.title}</h3>
// //               <p className="font-['Poppins',sans-serif] text-[15px] font-normal leading-[1.55] text-[#8b8a98]">{b.body}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom line + CTA overlaid on the TOP of a full-bleed image.
// //             The image flows at its natural aspect ratio (so it's fully visible,
// //             never cropped), breaks out to full viewport width, and the text+CTA
// //             are absolutely positioned over its top area. */}
// //         <div className="relative mt-10">
// //           {/* Full-bleed image — natural height, completely visible.
// //               Negative top margin lifts ONLY the image up (CTA stays put). */}
// //           <div className="pointer-events-none relative left-1/2 -ml-[50vw] -mt-[clamp(24px,6vw,96px)] w-screen">
// //             <img
// //               src="/images/transformation/branch.webp"
// //               alt=""
// //               aria-hidden="true"
// //               className="block h-auto w-full"
// //               onError={(e) => {
// //                 e.currentTarget.style.opacity = "0";
// //               }}
// //             />
// //           </div>

// //           {/* Foreground: bottom-line + CTA, pinned over the top of the image */}
// //           <div className="absolute inset-x-0 top-0 z-[1] flex flex-col items-center px-[clamp(20px,3.2vw,40px)]">
// //             <p className="mx-auto mb-6 max-w-[760px] text-center font-['Poppins',sans-serif] text-[clamp(16px,1.56vw,20px)] font-medium leading-[1.62] text-[#8b8a98]">
// //               10 minutes a day. One deed. Three lives transformed.
// //             </p>

// //             <button
// //               onClick={() => router.push("/download-app")}
// //               className="inline-flex h-[61px] cursor-pointer items-center gap-3 rounded-[22px] border-0 bg-[linear-gradient(172deg,#ffae57_0%,#ff8a2e_40%,#fb6e11_100%)] px-9 font-['Poppins',sans-serif] text-[18px] font-semibold tracking-[0.18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:brightness-105 max-[560px]:px-[26px] max-[560px]:text-base"
// //             >
// //               Start the transformation <IconArrowRight />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .card {
// //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
// //             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.3);
// //           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
// //         }
// //         .card:hover {
// //           transform: translateY(-4px);
// //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
// //             inset 0 -1px 0 rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.45),
// //             0 0 60px rgba(255, 154, 64, 0.08);
// //         }
// //         .tk {
// //           -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// //           mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
// //         }
// //         .tk-track { animation: ux-ticker 40s linear infinite; }
// //         @keyframes ux-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

// //         :global([data-state="before"]) .tg-btn[data-tab="before"] {
// //           background: rgba(255, 255, 255, 0.1); color: #fff;
// //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
// //         }
// //         :global([data-state="after"]) .tg-btn[data-tab="after"] {
// //           background: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%); color: #fff;
// //           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
// //         }
// //         :global([data-state="before"]) .tg-btn[data-tab="after"] .shimmer { animation: ux-shimmer 2.4s ease-in-out infinite; }
// //         :global([data-state="before"]) .tg-btn[data-tab="after"] { animation: ux-after-pulse 2.4s ease-in-out infinite; }
// //         :global(.shimmer-off) .tg-btn[data-tab="after"] .shimmer { display: none !important; animation: none !important; }
// //         :global(.shimmer-off) .tg-btn[data-tab="after"] { animation: none !important; }
// //         @keyframes ux-shimmer { 0% { left: -120%; } 60% { left: 130%; } 100% { left: 130%; } }
// //         @keyframes ux-after-pulse { 0%,100% { color: #ffb36b; } 50% { color: #ffd9ad; } }

// //         .gauge-val {
// //           fill: none; stroke-width: 16; stroke-linecap: round;
// //           stroke: var(--gauge-stroke);
// //           stroke-dasharray: 628.318; stroke-dashoffset: var(--gauge-off);
// //           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
// //         }
// //         :global([data-state="before"]) { --gauge-stroke: url(#uxGradBefore); --gauge-off: 496.4; }
// //         :global([data-state="after"]) { --gauge-stroke: url(#uxGradAfter); --gauge-off: 81.7; }

// //         .planet { transition: background 0.8s ease, box-shadow 0.8s ease; }
// //         :global([data-state="before"]) .planet {
// //           background: radial-gradient(circle at 38% 32%, #3a3850 0%, #2a2940 45%, #1c1b2c 100%);
// //           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6), inset 8px 10px 28px rgba(150, 148, 196, 0.18);
// //         }
// //         :global([data-state="after"]) .planet {
// //           background: radial-gradient(circle at 38% 32%, #ffe4c2 0%, #ffcc97 9%, #ffb36b 18%, #ff9a40 40%, #ff8a2c 51%, #ff7a18 62%, #c9510a 84%, #a24208 92%, #7a3206 100%);
// //           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5), inset -10px -14px 36px rgba(70, 18, 0, 0.55), inset 8px 10px 28px rgba(255, 224, 180, 0.45);
// //         }

// //         .planet-badge { transition: background 0.6s ease, color 0.6s ease; }
// //         :global([data-state="before"]) .planet-badge { background: rgba(255, 255, 255, 0.1); color: #c3c2ce; }
// //         :global([data-state="after"]) .planet-badge { background: rgba(255, 236, 210, 0.85); color: #2a1402; }
// //         .planet-badge .swap-before, .planet-badge .swap-after { display: inline; }
// //         :global([data-state="after"]) .planet-badge .swap-before { display: none; }
// //         :global([data-state="before"]) .planet-badge .swap-after { display: none; }

// //         .dim-fill { width: var(--w-before); transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease; }
// //         :global([data-state="before"]) .dim-fill { width: var(--w-before); background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%); }
// //         :global([data-state="after"]) .dim-fill {
// //           width: var(--w-after);
// //           background: linear-gradient(90deg, #ffb13d 0%, #ff7a18 35%, #ff4d8d 72%, #a24bff 100%);
// //           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
// //         }

// //         .qt .swap-before, .qt .swap-after { display: none; }
// //         :global([data-state="before"]) .qt .swap-before { display: inline; }
// //         :global([data-state="after"]) .qt .swap-after { display: inline; }

// //         .benefit-icon::before {
// //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// //         }

// //         @media (prefers-reduced-motion: reduce) {
// //           .tk-track, .tg-btn, .tg-btn .shimmer { animation: none !important; }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // function Label({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#8b8a98] before:h-2 before:w-2 before:rounded before:bg-[#ff9a40] before:shadow-[0_0_10px_#ff9a40] before:content-['']">
// //       {children}
// //     </div>
// //   );
// // }

// // function Zone({ zone, name, range }: { zone: "disconnected" | "connected" | "thriving"; name: string; range: string }) {
// //   return (
// //     <div
// //       data-zone={zone}
// //       className="zone relative rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-[16px_10px] text-center max-[560px]:p-[12px_6px]"
// //     >
// //       <div className="zone-name font-['Outfit',sans-serif] text-[14px] font-bold text-[#8b8a98] max-[560px]:text-[12.5px] max-[380px]:text-[11.5px]">
// //         {name}
// //       </div>
// //       <div className="mt-[5px] font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#5c5b68] max-[560px]:text-[12px]">
// //         {range}
// //       </div>
// //       <style jsx>{`
// //         :global([data-state="before"]) .zone[data-zone="disconnected"],
// //         :global([data-state="after"]) .zone[data-zone="thriving"] { border-color: transparent; }
// //         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
// //         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
// //           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
// //           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
// //           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
// //           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
// //         }
// //         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
// //         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name { color: #ffb36b; }
// //       `}</style>
// //     </div>
// //   );
// // }

// // function IconClock() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px] flex-shrink-0">
// //       <circle cx="12" cy="12" r="9" />
// //       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }
// // function IconSparkle() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0">
// //       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
// //     </svg>
// //   );
// // }
// // function IconDot() {
// //   return (
// //     <svg viewBox="0 0 18 18" fill="none" className="block">
// //       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
// //       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
// //     </svg>
// //   );
// // }
// // function IconArrow() {
// //   return (
// //     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6" className="block">
// //       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }
// // function IconQuote() {
// //   return (
// //     <svg viewBox="0 0 20 20" fill="#ff9a40" className="block h-full w-full">
// //       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
// //     </svg>
// //   );
// // }
// // function IconStar() {
// //   return (
// //     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8" className="h-[26px] w-[26px]">
// //       <path d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }
// // function IconArrowRight() {
// //   return (
// //     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2" className="h-[18px] w-[18px]">
// //       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }



// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// /**
//  * Transformation ("Bond Meter") — Tailwind-first.
//  *
//  * ~70% of styling is Tailwind utility classes (arbitrary values keep the design
//  * pixel-identical, so no tailwind.config changes needed). A small scoped
//  * <style jsx> block holds ONLY what Tailwind can't express cleanly:
//  *   1. @keyframes (ticker, shimmer, pulse)
//  *   2. [data-state] before/after switching (one attribute flips ~15 properties)
//  *   3. ticker edge-mask, glass-card multi-layer hover shadow, mask-composite
//  *      gradient borders (zones + benefit icon)
//  *
//  * Fonts: Outfit + Poppins must be loaded globally.
//  */

// type State = "before" | "after";

// const VALUES: Record<State, number> = { before: 210, after: 870 };

// const DIMENSIONS = [
//   { name: "Emotional regulation", before: 24, after: 88 },
//   { name: "Confidence", before: 28, after: 90 },
//   { name: "Curiosity", before: 22, after: 93 },
//   { name: "Discipline", before: 26, after: 84 },
//   { name: "Connection", before: 16, after: 94 },
//   { name: "Resilience", before: 20, after: 89 },
// ];

// const BENEFITS = [
//   {
//     title: "You stop yelling",
//     body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
//   },
//   {
//     title: "They start talking",
//     body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
//   },
//   {
//     title: "You grow together",
//     body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
//   },
// ];

// const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

// export default function Transformation() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [state, setState] = useState<State>("before");
//   const [shimmerKilled, setShimmerKilled] = useState(false);
//   const [displayNum, setDisplayNum] = useState(VALUES.before);
//   const rafRef = useRef<number | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const target = VALUES[state];
//     const start = displayNum;
//     const startT = performance.now();
//     const dur = 1100;
//     const step = (now: number) => {
//       const p = Math.min((now - startT) / dur, 1);
//       const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
//       setDisplayNum(Math.round(start + (target - start) * e));
//       if (p < 1) rafRef.current = requestAnimationFrame(step);
//     };
//     rafRef.current = requestAnimationFrame(step);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [state]);

//   const [filled, setFilled] = useState(false);
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el || !("IntersectionObserver" in window)) {
//       setFilled(true);
//       return;
//     }
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((en) => {
//           if (en.isIntersecting) {
//             setFilled(true);
//             io.disconnect();
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   const handleToggle = (next: State) => {
//     if (next === "after" && !shimmerKilled) setShimmerKilled(true);
//     setState(next);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="transformations"
//       data-state={state}
//       className={`uxform relative w-full overflow-hidden bg-[#050507] pb-[clamp(48px,7vh,96px)] font-['Poppins',sans-serif] text-white antialiased ${
//         shimmerKilled ? "shimmer-off" : ""
//       }`}
//     >
//       {/* Ticker marquee */}
//       <div className="tk relative z-[2] mb-[clamp(64px,9vh,130px)] w-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[18px]">
//         <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <span key={i} className="inline-flex items-center gap-[26px]">
//               <span
//                 className={`font-['Outfit',sans-serif] text-[clamp(16px,2vw,26px)] font-bold tracking-[0.26px] ${
//                   i % 2 === 0 ? "text-[#ff9a40]" : "text-white"
//                 }`}
//               >
//                 {TICKER_LINE}
//               </span>
//               <span className="text-[clamp(13px,1.56vw,20px)] text-[#ff7a18]">✦</span>
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,3.2vw,40px)]">
//         {/* Pill */}
//         <div className="mb-[26px] flex justify-center">
//           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
//             <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
//             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
//               The Transformation
//             </span>
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(30px,4.7vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white">
//           The same child.
//           <br />
//           <span className="bg-[linear-gradient(100deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)] bg-clip-text text-transparent">
//             An entirely different bond.
//           </span>
//         </h2>

//         <p className="mx-auto mb-9 max-w-[760px] text-center text-[clamp(15px,1.56vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
//           Watch your family&apos;s Bond Meter climb as your child grows. From
//           distant and distracted to confident, curious, and connected — measured
//           in real moments, not in time.
//         </p>

//         {/* Toggle */}
//         <div className="mb-11 flex justify-center">
//           <div className="inline-flex h-[57px] max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-[7px] max-[560px]:h-auto">
//             <button
//               data-tab="before"
//               role="tab"
//               aria-selected={state === "before"}
//               onClick={() => handleToggle("before")}
//               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
//             >
//               <IconClock />
//               Before
//             </button>
//             <button
//               data-tab="after"
//               role="tab"
//               aria-selected={state === "after"}
//               onClick={() => handleToggle("after")}
//               className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
//             >
//               <span className="shimmer pointer-events-none absolute left-[-120%] top-0 h-full w-[70%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,174,87,0)_20%,rgba(255,174,87,0.55)_50%,rgba(255,174,87,0)_80%,transparent_100%)]" />
//               <IconSparkle />
//               After UltiMate
//             </button>
//           </div>
//         </div>

//         {/* Cards grid */}
//         <div className="mb-6 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
//           {/* LEFT */}
//           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_40px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
//             <Label>Bond Meter</Label>

//             <div className="relative mx-auto mt-7 aspect-square w-full max-w-[360px] max-[980px]:max-w-[320px]">
//               <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
//                 <defs>
//                   <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#ffb13d" />
//                     <stop offset="35%" stopColor="#ff7a18" />
//                     <stop offset="72%" stopColor="#ff4d8d" />
//                     <stop offset="100%" stopColor="#a24bff" />
//                   </linearGradient>
//                   <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#8d8ab8" />
//                     <stop offset="100%" stopColor="#a29fce" />
//                   </linearGradient>
//                 </defs>
//                 <circle cx="120" cy="120" r="100" className="fill-none stroke-white/[0.06] [stroke-width:16]" />
//                 <circle cx="120" cy="120" r="100" className="gauge-val" />
//               </svg>

//               <div className="planet absolute left-1/2 top-1/2 flex aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full leading-none">
//                 <div className="font-['Outfit',sans-serif] text-[clamp(40px,5.6vw,56px)] font-extrabold leading-none tracking-[-1.6px] text-white [text-shadow:0_2px_14px_rgba(80,24,0,0.5)]">
//                   {displayNum}
//                 </div>
//                 <div className="mt-1 font-['Outfit',sans-serif] text-[13px] font-bold text-white/60">/ 1000</div>
//                 <div className="planet-badge mt-3 rounded-full px-[13px] py-[5px] font-['Outfit',sans-serif] text-[12px] font-bold uppercase tracking-[1.4px]">
//                   <span className="swap-before">Disconnected</span>
//                   <span className="swap-after">Thriving</span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-auto grid grid-cols-3 gap-4 pt-8 max-[560px]:gap-2.5">
//               <Zone zone="disconnected" name="Disconnected" range="0–333" />
//               <Zone zone="connected" name="Connected" range="334–666" />
//               <Zone zone="thriving" name="Thriving" range="667–1000" />
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_32px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
//             <Label>Six dimensions of the bond</Label>

//             <div className="mt-6 flex flex-1 flex-col justify-between gap-[18px]">
//               {DIMENSIONS.map((d) => (
//                 <div
//                   key={d.name}
//                   style={{ "--w-before": `${d.before}%`, "--w-after": `${d.after}%` } as React.CSSProperties}
//                 >
//                   <div className="mb-2 flex items-center gap-[9px]">
//                     <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center">
//                       <IconDot />
//                     </span>
//                     <span className="flex-1 font-['Outfit',sans-serif] text-[14.5px] font-semibold text-[#c3c2ce]">
//                       {d.name}
//                     </span>
//                     <span className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-extrabold">
//                       <span className="text-[#5c5b68]">{d.before}</span>
//                       <span className="inline-flex h-[9px] w-3">
//                         <IconArrow />
//                       </span>
//                       <span className="text-[#ffb36b]">{d.after}</span>
//                     </span>
//                   </div>
//                   <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.07]">
//                     <div className="dim-fill absolute inset-y-0 left-0 h-full rounded-full" style={filled ? undefined : { width: "0%" }} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-[26px] flex gap-3 border-t border-white/[0.06] pt-[22px]">
//               <span className="mt-0.5 h-5 w-5 flex-shrink-0">
//                 <IconQuote />
//               </span>
//               <p className="qt font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.6] text-[#8b8a98]">
//                 <span className="swap-before">
//                   The dashed line marks where each thread of the bond started.{" "}
//                   <b className="font-semibold text-white">Before, the words came out sharp</b> and the
//                   moment closed before it ever opened.
//                 </span>
//                 <span className="swap-after">
//                   Same child, same ten minutes a day.{" "}
//                   <b className="font-semibold text-white">You respond instead of react</b> — and every
//                   thread of the bond climbs into the Thriving zone.
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Benefits */}
//         <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
//           {BENEFITS.map((b) => (
//             <div key={b.title} className="card rounded-[22px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[50px]">
//               <div className="benefit-icon relative mb-[30px] flex h-[54px] w-[54px] items-center justify-center rounded-[15px]">
//                 <IconStar />
//               </div>
//               <h3 className="mb-3.5 font-['Outfit',sans-serif] text-[20px] font-bold text-white">{b.title}</h3>
//               <p className="font-['Poppins',sans-serif] text-[15px] font-normal leading-[1.55] text-[#8b8a98]">{b.body}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom line + CTA overlaid on the TOP of a full-bleed image.
//             The image flows at its natural aspect ratio (so it's fully visible,
//             never cropped), breaks out to full viewport width, and the text+CTA
//             are absolutely positioned over its top area. */}
//         <div className="relative mt-10">
//           {/* Full-bleed image — natural height, completely visible.
//               Negative top margin lifts ONLY the image up (CTA stays put). */}
//           <div className="pointer-events-none relative left-1/2 -ml-[50vw] -mt-[clamp(24px,6vw,96px)] w-screen">
//             <img
//               src="/images/transformation/branch.webp"
//               alt=""
//               aria-hidden="true"
//               className="block h-auto w-full"
//               onError={(e) => {
//                 e.currentTarget.style.opacity = "0";
//               }}
//             />
//           </div>

//           {/* Foreground: bottom-line + CTA. Pushed down to the original position
//               (independent of the image, which was lifted via its own margin). */}
//           <div className="absolute inset-x-0 top-[clamp(24px,6vw,96px)] z-[1] flex flex-col items-center px-[clamp(20px,3.2vw,40px)]">
//             <p className="mx-auto mb-6 max-w-[760px] text-center font-['Poppins',sans-serif] text-[clamp(16px,1.56vw,20px)] font-medium leading-[1.62] text-[#8b8a98]">
//               10 minutes a day. One deed. Three lives transformed.
//             </p>

//             <button
//               onClick={() => router.push("/download-app")}
//               className="inline-flex h-[61px] cursor-pointer items-center gap-3 rounded-[22px] border-0 bg-[linear-gradient(172deg,#ffae57_0%,#ff8a2e_40%,#fb6e11_100%)] px-9 font-['Poppins',sans-serif] text-[18px] font-semibold tracking-[0.18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:brightness-105 max-[560px]:px-[26px] max-[560px]:text-base"
//             >
//               Start the transformation <IconArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .card {
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.3);
//           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
//         }
//         .card:hover {
//           transform: translateY(-4px);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.45),
//             0 0 60px rgba(255, 154, 64, 0.08);
//         }
//         .tk {
//           -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
//           mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
//         }
//         .tk-track { animation: ux-ticker 40s linear infinite; }
//         @keyframes ux-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

//         :global([data-state="before"]) .tg-btn[data-tab="before"] {
//           background: rgba(255, 255, 255, 0.1); color: #fff;
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
//         }
//         :global([data-state="after"]) .tg-btn[data-tab="after"] {
//           background: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%); color: #fff;
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
//         }
//         :global([data-state="before"]) .tg-btn[data-tab="after"] .shimmer { animation: ux-shimmer 2.4s ease-in-out infinite; }
//         :global([data-state="before"]) .tg-btn[data-tab="after"] { animation: ux-after-pulse 2.4s ease-in-out infinite; }
//         :global(.shimmer-off) .tg-btn[data-tab="after"] .shimmer { display: none !important; animation: none !important; }
//         :global(.shimmer-off) .tg-btn[data-tab="after"] { animation: none !important; }
//         @keyframes ux-shimmer { 0% { left: -120%; } 60% { left: 130%; } 100% { left: 130%; } }
//         @keyframes ux-after-pulse { 0%,100% { color: #ffb36b; } 50% { color: #ffd9ad; } }

//         .gauge-val {
//           fill: none; stroke-width: 16; stroke-linecap: round;
//           stroke: var(--gauge-stroke);
//           stroke-dasharray: 628.318; stroke-dashoffset: var(--gauge-off);
//           transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         :global([data-state="before"]) { --gauge-stroke: url(#uxGradBefore); --gauge-off: 496.4; }
//         :global([data-state="after"]) { --gauge-stroke: url(#uxGradAfter); --gauge-off: 81.7; }

//         .planet { transition: background 0.8s ease, box-shadow 0.8s ease; }
//         :global([data-state="before"]) .planet {
//           background: radial-gradient(circle at 38% 32%, #3a3850 0%, #2a2940 45%, #1c1b2c 100%);
//           box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6), inset 8px 10px 28px rgba(150, 148, 196, 0.18);
//         }
//         :global([data-state="after"]) .planet {
//           background: radial-gradient(circle at 38% 32%, #ffe4c2 0%, #ffcc97 9%, #ffb36b 18%, #ff9a40 40%, #ff8a2c 51%, #ff7a18 62%, #c9510a 84%, #a24208 92%, #7a3206 100%);
//           box-shadow: 0 0 35px rgba(255, 122, 24, 0.5), inset -10px -14px 36px rgba(70, 18, 0, 0.55), inset 8px 10px 28px rgba(255, 224, 180, 0.45);
//         }

//         .planet-badge { transition: background 0.6s ease, color 0.6s ease; }
//         :global([data-state="before"]) .planet-badge { background: rgba(255, 255, 255, 0.1); color: #c3c2ce; }
//         :global([data-state="after"]) .planet-badge { background: rgba(255, 236, 210, 0.85); color: #2a1402; }
//         .planet-badge .swap-before, .planet-badge .swap-after { display: inline; }
//         :global([data-state="after"]) .planet-badge .swap-before { display: none; }
//         :global([data-state="before"]) .planet-badge .swap-after { display: none; }

//         .dim-fill { width: var(--w-before); transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease; }
//         :global([data-state="before"]) .dim-fill { width: var(--w-before); background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%); }
//         :global([data-state="after"]) .dim-fill {
//           width: var(--w-after);
//           background: linear-gradient(90deg, #ffb13d 0%, #ff7a18 35%, #ff4d8d 72%, #a24bff 100%);
//           box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
//         }

//         .qt .swap-before, .qt .swap-after { display: none; }
//         :global([data-state="before"]) .qt .swap-before { display: inline; }
//         :global([data-state="after"]) .qt .swap-after { display: inline; }

//         .benefit-icon::before {
//           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
//           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
//           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .tk-track, .tg-btn, .tg-btn .shimmer { animation: none !important; }
//         }
//       `}</style>
//     </section>
//   );
// }

// function Label({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#8b8a98] before:h-2 before:w-2 before:rounded before:bg-[#ff9a40] before:shadow-[0_0_10px_#ff9a40] before:content-['']">
//       {children}
//     </div>
//   );
// }

// function Zone({ zone, name, range }: { zone: "disconnected" | "connected" | "thriving"; name: string; range: string }) {
//   return (
//     <div
//       data-zone={zone}
//       className="zone relative rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-[16px_10px] text-center max-[560px]:p-[12px_6px]"
//     >
//       <div className="zone-name font-['Outfit',sans-serif] text-[14px] font-bold text-[#8b8a98] max-[560px]:text-[12.5px] max-[380px]:text-[11.5px]">
//         {name}
//       </div>
//       <div className="mt-[5px] font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#5c5b68] max-[560px]:text-[12px]">
//         {range}
//       </div>
//       <style jsx>{`
//         :global([data-state="before"]) .zone[data-zone="disconnected"],
//         :global([data-state="after"]) .zone[data-zone="thriving"] { border-color: transparent; }
//         :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
//         :global([data-state="after"]) .zone[data-zone="thriving"]::before {
//           content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
//           background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
//           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
//         }
//         :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
//         :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name { color: #ffb36b; }
//       `}</style>
//     </div>
//   );
// }

// function IconClock() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px] flex-shrink-0">
//       <circle cx="12" cy="12" r="9" />
//       <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function IconSparkle() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0">
//       <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
//     </svg>
//   );
// }
// function IconDot() {
//   return (
//     <svg viewBox="0 0 18 18" fill="none" className="block">
//       <circle cx="9" cy="9" r="4" fill="#ff9a40" />
//       <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
//     </svg>
//   );
// }
// function IconArrow() {
//   return (
//     <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6" className="block">
//       <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function IconQuote() {
//   return (
//     <svg viewBox="0 0 20 20" fill="#ff9a40" className="block h-full w-full">
//       <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
//     </svg>
//   );
// }
// function IconStar() {
//   return (
//     <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8" className="h-[26px] w-[26px]">
//       <path d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function IconArrowRight() {
//   return (
//     <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2" className="h-[18px] w-[18px]">
//       <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }



"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Transformation ("Bond Meter") — Tailwind-first.
 *
 * ~70% of styling is Tailwind utility classes (arbitrary values keep the design
 * pixel-identical, so no tailwind.config changes needed). A small scoped
 * <style jsx> block holds ONLY what Tailwind can't express cleanly:
 *   1. @keyframes (ticker, shimmer, pulse)
 *   2. [data-state] before/after switching (one attribute flips ~15 properties)
 *   3. ticker edge-mask, glass-card multi-layer hover shadow, mask-composite
 *      gradient borders (zones + benefit icon)
 *
 * Fonts: Outfit + Poppins must be loaded globally.
 */

type State = "before" | "after";

const VALUES: Record<State, number> = { before: 210, after: 870 };

const DIMENSIONS = [
  { name: "Emotional regulation", before: 24, after: 88 },
  { name: "Confidence", before: 28, after: 90 },
  { name: "Curiosity", before: 22, after: 93 },
  { name: "Discipline", before: 26, after: 84 },
  { name: "Connection", before: 16, after: 94 },
  { name: "Resilience", before: 20, after: 89 },
];

const BENEFITS = [
  {
    title: "You stop yelling",
    body: "Not because you tried harder — because you finally have the tools to respond instead of react.",
  },
  {
    title: "They start talking",
    body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.',
  },
  {
    title: "You grow together",
    body: "Parenting stops feeling like a job you're failing at. It starts feeling like the most important thing you do.",
  },
];

const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

export default function Transformation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>("before");
  const [shimmerKilled, setShimmerKilled] = useState(false);
  const [displayNum, setDisplayNum] = useState(VALUES.before);
  const rafRef = useRef<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const target = VALUES[state];
    const start = displayNum;
    const startT = performance.now();
    const dur = 1100;
    const step = (now: number) => {
      const p = Math.min((now - startT) / dur, 1);
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplayNum(Math.round(start + (target - start) * e));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setFilled(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setFilled(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleToggle = (next: State) => {
    if (next === "after" && !shimmerKilled) setShimmerKilled(true);
    setState(next);
  };

  return (
    <section
      ref={sectionRef}
      id="transformations"
      data-state={state}
      className={`uxform relative w-full overflow-hidden bg-[#050507] pb-[clamp(48px,7vh,96px)] font-['Poppins',sans-serif] text-white antialiased ${
        shimmerKilled ? "shimmer-off" : ""
      }`}
    >
      {/* Ticker marquee */}
      <div className="tk relative z-[2] mb-[clamp(64px,9vh,130px)] w-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[18px]">
        <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-[26px]">
              <span
                className={`font-['Outfit',sans-serif] text-[clamp(16px,2vw,26px)] font-bold tracking-[0.26px] ${
                  i % 2 === 0 ? "text-[#ff9a40]" : "text-white"
                }`}
              >
                {TICKER_LINE}
              </span>
              <span className="text-[clamp(13px,1.56vw,20px)] text-[#ff7a18]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,3.2vw,40px)]">
        {/* Pill */}
        <div className="mb-[26px] flex justify-center">
          <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
            <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
            <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
              The Transformation
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(30px,4.7vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white">
          The same child.
          <br />
          <span className="bg-[linear-gradient(100deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)] bg-clip-text text-transparent">
            An entirely different bond.
          </span>
        </h2>

        <p className="mx-auto mb-9 max-w-[760px] text-center text-[clamp(15px,1.56vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
          Watch your family&apos;s Bond Meter climb as your child grows. From
          distant and distracted to confident, curious, and connected — measured
          in real moments, not in time.
        </p>

        {/* Toggle */}
        <div className="mb-11 flex justify-center">
          <div className="inline-flex h-[57px] max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-[7px] max-[560px]:h-auto">
            <button
              data-tab="before"
              role="tab"
              aria-selected={state === "before"}
              onClick={() => handleToggle("before")}
              className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
            >
              <IconClock />
              Before
            </button>
            <button
              data-tab="after"
              role="tab"
              aria-selected={state === "after"}
              onClick={() => handleToggle("after")}
              className="tg-btn relative inline-flex h-[43px] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-0 bg-transparent px-[22px] font-['Outfit',sans-serif] text-[14.5px] font-bold text-[#8b8a98] transition-[color,background] duration-[400ms] max-[560px]:px-4 max-[560px]:text-[13px] max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
            >
              <span className="shimmer pointer-events-none absolute left-[-120%] top-0 h-full w-[70%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,174,87,0)_20%,rgba(255,174,87,0.55)_50%,rgba(255,174,87,0)_80%,transparent_100%)]" />
              <IconSparkle />
              After UltiMate
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mb-6 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
          {/* LEFT */}
          <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_40px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
            <Label>Bond Meter</Label>

            <div className="relative mx-auto mt-7 aspect-square w-full max-w-[360px] max-[980px]:max-w-[320px]">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
                <defs>
                  <linearGradient id="uxGradAfter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffb13d" />
                    <stop offset="35%" stopColor="#ff7a18" />
                    <stop offset="72%" stopColor="#ff4d8d" />
                    <stop offset="100%" stopColor="#a24bff" />
                  </linearGradient>
                  <linearGradient id="uxGradBefore" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8d8ab8" />
                    <stop offset="100%" stopColor="#a29fce" />
                  </linearGradient>
                </defs>
                <circle cx="120" cy="120" r="100" className="fill-none stroke-white/[0.06] [stroke-width:16]" />
                <circle cx="120" cy="120" r="100" className="gauge-val" />
              </svg>

              <div className="planet absolute left-1/2 top-1/2 flex aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full leading-none">
                <div className="font-['Outfit',sans-serif] text-[clamp(40px,5.6vw,56px)] font-extrabold leading-none tracking-[-1.6px] text-white [text-shadow:0_2px_14px_rgba(80,24,0,0.5)]">
                  {displayNum}
                </div>
                <div className="mt-1 font-['Outfit',sans-serif] text-[13px] font-bold text-white/60">/ 1000</div>
                <div className="planet-badge mt-3 rounded-full px-[13px] py-[5px] font-['Outfit',sans-serif] text-[12px] font-bold uppercase tracking-[1.4px]">
                  <span className="swap-before">Disconnected</span>
                  <span className="swap-after">Thriving</span>
                </div>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-4 pt-8 max-[560px]:gap-2.5">
              <Zone zone="disconnected" name="Disconnected" range="0–333" />
              <Zone zone="connected" name="Connected" range="334–666" />
              <Zone zone="thriving" name="Thriving" range="667–1000" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="card flex flex-col rounded-[36px] border border-white/10 bg-white/[0.04] p-[36px_40px_32px] backdrop-blur-[50px] max-[980px]:p-[28px_24px] max-[560px]:p-[24px_18px]">
            <Label>Six dimensions of the bond</Label>

            <div className="mt-6 flex flex-1 flex-col justify-between gap-[18px]">
              {DIMENSIONS.map((d) => (
                <div
                  key={d.name}
                  style={{ "--w-before": `${d.before}%`, "--w-after": `${d.after}%` } as React.CSSProperties}
                >
                  <div className="mb-2 flex items-center gap-[9px]">
                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center">
                      <IconDot />
                    </span>
                    <span className="flex-1 font-['Outfit',sans-serif] text-[14.5px] font-semibold text-[#c3c2ce]">
                      {d.name}
                    </span>
                    <span className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-extrabold">
                      <span className="text-[#5c5b68]">{d.before}</span>
                      <span className="inline-flex h-[9px] w-3">
                        <IconArrow />
                      </span>
                      <span className="text-[#ffb36b]">{d.after}</span>
                    </span>
                  </div>
                  <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.07]">
                    <div className="dim-fill absolute inset-y-0 left-0 h-full rounded-full" style={filled ? undefined : { width: "0%" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[26px] flex gap-3 border-t border-white/[0.06] pt-[22px]">
              <span className="mt-0.5 h-5 w-5 flex-shrink-0">
                <IconQuote />
              </span>
              <p className="qt font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.6] text-[#8b8a98]">
                <span className="swap-before">
                  The dashed line marks where each thread of the bond started.{" "}
                  <b className="font-semibold text-white">Before, the words came out sharp</b> and the
                  moment closed before it ever opened.
                </span>
                <span className="swap-after">
                  Same child, same ten minutes a day.{" "}
                  <b className="font-semibold text-white">You respond instead of react</b> — and every
                  thread of the bond climbs into the Thriving zone.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card rounded-[22px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[50px]">
              <div className="benefit-icon relative mb-[30px] flex h-[54px] w-[54px] items-center justify-center rounded-[15px]">
                <IconStar />
              </div>
              <h3 className="mb-3.5 font-['Outfit',sans-serif] text-[20px] font-bold text-white">{b.title}</h3>
              <p className="font-['Poppins',sans-serif] text-[15px] font-normal leading-[1.55] text-[#8b8a98]">{b.body}</p>
            </div>
          ))}
        </div>

        {/* On mobile/tablet: normal stack — text + button, then image below.
            On lg+: the CTA becomes an absolute overlay on top of the image,
            and the image is lifted up behind it. */}
        <div className="relative mt-10 flex flex-col items-center lg:block">
          {/* Foreground: bottom-line + CTA.
              Mobile: normal flow (sits above the image).
              lg+: absolute overlay pushed down to original position. */}
          <div className="z-[1] flex w-full flex-col items-center px-[clamp(20px,3.2vw,40px)] lg:absolute lg:inset-x-0 lg:top-[clamp(24px,6vw,96px)]">
            <p className="mx-auto mb-6 max-w-[760px] text-center font-['Poppins',sans-serif] text-[clamp(16px,1.56vw,20px)] font-medium leading-[1.62] text-[#8b8a98]">
              10 minutes a day. One deed. Three lives transformed.
            </p>

            <button
              onClick={() => router.push("/download-app")}
              className="inline-flex h-[61px] cursor-pointer items-center gap-3 rounded-[22px] border-0 bg-[linear-gradient(172deg,#ffae57_0%,#ff8a2e_40%,#fb6e11_100%)] px-9 font-['Poppins',sans-serif] text-lg font-semibold tracking-[0.18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:brightness-105 max-[560px]:px-[26px] max-[560px]:text-base"
            >
              Start the transformation <IconArrowRight />
            </button>
          </div>

          {/* Full-bleed image.
              Mobile: sits below the button in normal flow (with a little gap).
              lg+: lifted up via negative margin to sit behind the CTA. */}
          <div className="pointer-events-none relative lg:left-1/2 left-1/4 mt-8 lg:-ml-[50vw] -ml-[45vw] w-screen lg:mt-0 lg:-mt-[clamp(24px,6vw,96px)]">
            <img
              src="/images/transformation/branch.webp"
              alt=""
              aria-hidden="true"
              className="block h-auto w-full"
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.3);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0, 0, 0, 0.45),
            0 0 60px rgba(255, 154, 64, 0.08);
        }
        .tk {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
        }
        .tk-track { animation: ux-ticker 40s linear infinite; }
        @keyframes ux-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        :global([data-state="before"]) .tg-btn[data-tab="before"] {
          background: rgba(255, 255, 255, 0.1); color: #fff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }
        :global([data-state="after"]) .tg-btn[data-tab="after"] {
          background: linear-gradient(166deg, #ffae57 0%, #fb6e11 100%); color: #fff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        :global([data-state="before"]) .tg-btn[data-tab="after"] .shimmer { animation: ux-shimmer 2.4s ease-in-out infinite; }
        :global([data-state="before"]) .tg-btn[data-tab="after"] { animation: ux-after-pulse 2.4s ease-in-out infinite; }
        :global(.shimmer-off) .tg-btn[data-tab="after"] .shimmer { display: none !important; animation: none !important; }
        :global(.shimmer-off) .tg-btn[data-tab="after"] { animation: none !important; }
        @keyframes ux-shimmer { 0% { left: -120%; } 60% { left: 130%; } 100% { left: 130%; } }
        @keyframes ux-after-pulse { 0%,100% { color: #ffb36b; } 50% { color: #ffd9ad; } }

        .gauge-val {
          fill: none; stroke-width: 16; stroke-linecap: round;
          stroke: var(--gauge-stroke);
          stroke-dasharray: 628.318; stroke-dashoffset: var(--gauge-off);
          transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        :global([data-state="before"]) { --gauge-stroke: url(#uxGradBefore); --gauge-off: 496.4; }
        :global([data-state="after"]) { --gauge-stroke: url(#uxGradAfter); --gauge-off: 81.7; }

        .planet { transition: background 0.8s ease, box-shadow 0.8s ease; }
        :global([data-state="before"]) .planet {
          background: radial-gradient(circle at 38% 32%, #3a3850 0%, #2a2940 45%, #1c1b2c 100%);
          box-shadow: inset -10px -14px 36px rgba(20, 18, 40, 0.6), inset 8px 10px 28px rgba(150, 148, 196, 0.18);
        }
        :global([data-state="after"]) .planet {
          background: radial-gradient(circle at 38% 32%, #ffe4c2 0%, #ffcc97 9%, #ffb36b 18%, #ff9a40 40%, #ff8a2c 51%, #ff7a18 62%, #c9510a 84%, #a24208 92%, #7a3206 100%);
          box-shadow: 0 0 35px rgba(255, 122, 24, 0.5), inset -10px -14px 36px rgba(70, 18, 0, 0.55), inset 8px 10px 28px rgba(255, 224, 180, 0.45);
        }

        .planet-badge { transition: background 0.6s ease, color 0.6s ease; }
        :global([data-state="before"]) .planet-badge { background: rgba(255, 255, 255, 0.1); color: #c3c2ce; }
        :global([data-state="after"]) .planet-badge { background: rgba(255, 236, 210, 0.85); color: #2a1402; }
        .planet-badge .swap-before, .planet-badge .swap-after { display: inline; }
        :global([data-state="after"]) .planet-badge .swap-before { display: none; }
        :global([data-state="before"]) .planet-badge .swap-after { display: none; }

        .dim-fill { width: var(--w-before); transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease; }
        :global([data-state="before"]) .dim-fill { width: var(--w-before); background: linear-gradient(90deg, #8d8ab8 0%, #a29fce 100%); }
        :global([data-state="after"]) .dim-fill {
          width: var(--w-after);
          background: linear-gradient(90deg, #ffb13d 0%, #ff7a18 35%, #ff4d8d 72%, #a24bff 100%);
          box-shadow: 0 0 14px rgba(255, 122, 24, 0.4);
        }

        .qt .swap-before, .qt .swap-after { display: none; }
        :global([data-state="before"]) .qt .swap-before { display: inline; }
        :global([data-state="after"]) .qt .swap-after { display: inline; }

        .benefit-icon::before {
          content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
          background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .tk-track, .tg-btn, .tg-btn .shimmer { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#8b8a98] before:h-2 before:w-2 before:rounded before:bg-[#ff9a40] before:shadow-[0_0_10px_#ff9a40] before:content-['']">
      {children}
    </div>
  );
}

function Zone({ zone, name, range }: { zone: "disconnected" | "connected" | "thriving"; name: string; range: string }) {
  return (
    <div
      data-zone={zone}
      className="zone relative rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-[16px_10px] text-center max-[560px]:p-[12px_6px]"
    >
      <div className="zone-name font-['Outfit',sans-serif] text-[14px] font-bold text-[#8b8a98] max-[560px]:text-[12.5px] max-[380px]:text-[11.5px]">
        {name}
      </div>
      <div className="mt-[5px] font-['Poppins',sans-serif] text-[13.5px] font-medium text-[#5c5b68] max-[560px]:text-[12px]">
        {range}
      </div>
      <style jsx>{`
        :global([data-state="before"]) .zone[data-zone="disconnected"],
        :global([data-state="after"]) .zone[data-zone="thriving"] { border-color: transparent; }
        :global([data-state="before"]) .zone[data-zone="disconnected"]::before,
        :global([data-state="after"]) .zone[data-zone="thriving"]::before {
          content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
          background: linear-gradient(135deg, #ff9a40 0%, #ff7a18 28%, #ff4d8d 62%, #a24bff 100%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
        }
        :global([data-state="before"]) .zone[data-zone="disconnected"] .zone-name,
        :global([data-state="after"]) .zone[data-zone="thriving"] .zone-name { color: #ffb36b; }
      `}</style>
    </div>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px] flex-shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}
function IconDot() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="block">
      <circle cx="9" cy="9" r="4" fill="#ff9a40" />
      <circle cx="9" cy="9" r="7" stroke="rgba(255,154,64,0.4)" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 12 9" fill="none" stroke="#ffb36b" strokeWidth="1.6" className="block">
      <path d="M1 4.5h9M7 1l3.5 3.5L7 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconQuote() {
  return (
    <svg viewBox="0 0 20 20" fill="#ff9a40" className="block h-full w-full">
      <path d="M3 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H3v-6zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6z" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg viewBox="0 0 26 26" fill="none" stroke="#ff9a40" strokeWidth="1.8" className="h-[26px] w-[26px]">
      <path d="M13 3l2.7 6.3L22 11l-5 4.2L18.5 22 13 18.5 7.5 22 9 15.2 4 11l6.3-1.7L13 3z" strokeLinejoin="round" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2" className="h-[18px] w-[18px]">
      <path d="M3 9h11M10 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}