// // "use client";

// // import { motion } from "framer-motion";
// // import { Playfair_Display } from "next/font/google";

// // const playfair = Playfair_Display({ subsets: ["latin"] });

// // const leaderboardData = [
// //   { rank: 4, name: "Priya Singh", title: "Chapter Champion", puzzles: 52, accuracy: 94, change: 2, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
// //   { rank: 5, name: "Vivaan Das", title: "Literary Luminary", puzzles: 38, accuracy: 89, change: -1, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997674.png" },
// //   { rank: 6, name: "Ananya Rao", title: "Wisdom Weaver", puzzles: 61, accuracy: 91, change: 3, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997650.png" },
// //   { rank: 7, name: "Kabir Nair", title: "Story Seeker", puzzles: 29, accuracy: 82, change: -2, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
// //   { rank: 8, name: "Ishita Gupta", title: "Page Turner", puzzles: 74, accuracy: 96, change: 1, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997674.png" },
// //   { rank: 9, name: "Saanvi Tiwari", title: "Tale Tracker", puzzles: 45, accuracy: 78, change: -3, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997650.png" },
// //   { rank: 10, name: "Arjun Kapoor", title: "Narrative Navigator", puzzles: 41, accuracy: 85, change: 4, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
// // ];

// // const maxPuzzles = 80;


// // export default function ReadometerPage() {
// //   return (
// //     <main className="min-h-screen bg-[#080705]">


// //       <section
// //         className="pt-10  px-6 flex justify-center"
// //         style={{
// //           background:
// //             "radial-gradient(circle at center, #8B5CF638 0%, #080705 60%, #080705 100%)",
// //         }}
// //       >       <div className="w-full max-w-6xl text-center">

// //           {/* HEADER */}
// //           <div className="flex flex-col items-center">

// //             {/* Subtitle */}
// //             <div className="mb-4 mt-4">
// //               <span
// //                 className="text-[#A78BFA] text-[13px] font-bold tracking-[0.4em] uppercase leading-[1.2] flex flex-col items-center"
// //                 style={{ fontFamily: "'Outfit'" }}
// //               >
// //                 <span>WORDQUEST LEADERBOARD</span>
// //               </span>
// //             </div>

// //             {/* Title */}
// //             <div className="mb-6 max-w-5xl">
// //               <h1
// //                 className={`${playfair.className} text-[#f0f0f0] text-[3rem] md:text-[3rem] leading-[1.1]`}
// //                 style={{ fontWeight: 800, fontFamily: "'Playfair Display'" }}
// //               >
// //                 India's Sharpest Young Minds
// //               </h1>
// //             </div>

// //             {/* Description */}
// //             <div className="mb-5 max-w-3xl">
// //               <p
// //                 className={`${playfair.className} text-[#9ca3af] text-[17px] md:text-[19px] italic opacity-80`}
// //                 style={{ fontFamily: "'Outfit'" }}

// //               >
// //                 Ranked by puzzles cracked, words mastered, and accuracy earned.
// //               </p>
// //             </div>

// //             {/* Reward Badge */}
// //             <div className="mb-7">
// //               <div
// //                 className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-[#8B5CF6]"
// //                 style={{
// //                   background:
// //                     "linear-gradient(94.61deg, #2D1F4A 0%, #231640 100%)",
// //                 }}
// //               >
// //                 {/* Logo Box */}
// //                 <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center p-1"></div>

// //                 {/* Text */}
// //                 <p
// //                   className="text-[#C4B5FD] text-[14px]"
// //                   style={{ fontFamily: "Outfit", fontWeight: 600 }}
// //                 >
// //                   Top 3 win WordQuest Master badges + Crossword coupons weekly!
// //                 </p>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </section>


// //       <div
// //         className="bg-[#0f0f0f] px-  6 py-3.5 rounded-xl flex items-center justify-between gap-4 flex-wrap">

// //         {/* Category Tabs */}
// //         <div className="flex gap-2 flex-wrap mx-auto">
// //           <CategoryTab label="Pre-Primary" icon="🐣" />
// //           <CategoryTab label="Primary" icon="📖" />
// //           <CategoryTab label="Secondary I" icon="🎒" active />
// //           <CategoryTab label="Secondary II" icon="🎓" />
// //         </div>

// //         {/* Time Filters */}
// //         <div className="flex bg-[#141020] rounded-full p-1 border border-white/[0.06] mx-auto">
// //           <button className="px-5 py-1.5 rounded-full bg-[#8B5CF6] text-white text-[0.8rem] font-bold">
// //             Weekly
// //           </button>
// //           <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold ">
// //             Monthly
// //           </button>
// //           <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold ">
// //             All Time
// //           </button>
// //         </div>

// //       </div>


// //       <div
// //         className="bg-[#0f0f0f]  rounded-xl flex items-center justify-between gap-4 flex-wrap border-b border-white/10">

// //       </div>


// //       <section style={{
// //         background: "#0f0f0f", minHeight: "100vh", padding: "48px 40px 16px 40px", fontFamily: "sans-serif", position: "relative"
// //       }}>

// //         {/* Header */}
// //         <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>

// //           {/* Book mascot */}

// //           {/* Label */}
// //           <p style={{ color: "#A78BFA", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", margin: "0 0 8px 0", textTransform: "uppercase", fontFamily: "'Outfit'", lineHeight: "100%" }}>
// //             Wordquest
// //           </p>

// //           {/* Title */}
// //           <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800, margin: "0 0 10px 0", lineHeight: 1.2, fontFamily: "'Playfair Display'" }}>
// //             Top puzzle solvers — Secondary I (Ages 6–10)
// //           </h1>

// //           {/* Subtitle */}
// //           <p style={{ color: "#9B8F85", fontSize: "15px", margin: "0 0 8px 0", fontFamily: "'Outfit'", fontWeight: 400 }}>
// //             Children who read the most minutes this week, verified by parents.
// //           </p>

// //           {/* Badge */}
// //           <div style={{ display: "inline-block", border: "1px solid #5E40A8", borderRadius: "999px", padding: "6px 16px", color: "#C4B5FD", fontSize: "12px", marginBottom: "32px", backgroundColor: "#241642", fontFamily: "'Outfit'", fontWeight: 600, lineHeight: "100%" }}>
// //             Top 3 readers receive Crossword Bookstore coupons every Monday
// //           </div>

// //           {/* Podium Card */}
// //           <div style={{
// //             background: "#141020",
// //             borderRadius: "20px",
// //             padding: "48px 32px 32px",
// //             border: "1px solid #2C2620"
// //           }}>

// //             {/* Podium Row */}
// //             {/* Podium Row */}
// //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "26px" }}>

// //               {/* 2nd Place */}
// //               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
// //                 {/* Medal above avatar */}
// //                 <img
// //                   src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
// //                   alt="silver medal"
// //                   style={{ width: "19px", height: "26px", marginBottom: "6px", objectFit: "contain" }}
// //                 />
// //                 <div style={{
// //                   width: "67px", height: "68px", borderRadius: "50%",
// //                   border: "3px solid #C6B8FD", overflow: "hidden", marginBottom: "14px"
// //                 }}>
// //                   <img
// //                     src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
// //                     alt="Meera Joshi"
// //                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //                   />
// //                 </div>

// //                 <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Meera Joshi</p>

// //                 <p style={{ color: "#5C5248", fontWeight: 400, fontSize: "12px", margin: "0 0 10px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Bal Bharati, Mumbai</p>

// //                 <p style={{ color: "#F0EAE2", lineHeight: "26px", fontSize: "26px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>980 min</p>

// //                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 14px 0", fontWeight: 400, fontFamily: "'Outfit'" }}>this week</p>

// //                 <div style={{
// //                   background: "#241642", borderRadius: "999px", padding: "6px 18px",
// //                   color: "#C4B5FD", fontSize: "12px", fontWeight: 600,
// //                   border: "1px solid #C4B5FD", marginBottom: "16px",
// //                   fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
// //                 }}>
// //                   {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "14px", height: "14px" }} /> */}
// //                   🎁 Coupon Winner
// //                 </div>
// //                 <div style={{
// //                   background: "linear-gradient(180deg, #757c8333 0%, #A8B8C80D 100%)",
// //                   borderRadius: "12px 12px 0 0", width: "120px", height: "60px", padding: "15px 0", textAlign: "center"
// //                 }}>
// //                   <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#2</span>
// //                 </div>
// //               </div>

// //               {/* 1st Place */}
// //               <div style={{ display: "flex", marginTop: "15px", flexDirection: "column", alignItems: "center", transform: "translateY(-32px)" }}>
// //                 <img
// //                   src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
// //                   alt="gold medal"
// //                   style={{ width: "27px", height: "39px", marginBottom: "6px", objectFit: "contain" }}
// //                 />
// //                 <div style={{
// //                   width: "84px", height: "85px", borderRadius: "50%",
// //                   border: "3px solid #C6B8FD", overflow: "hidden", marginBottom: "14px",
                  
// //                 }}>
// //                   <img
// //                     src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
// //                     alt="Aarav Mehta"
// //                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //                   />
// //                 </div>

// //                 <p style={{ color: "#F0EAE2", fontStyle: "bold", fontSize: "17px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Aarav Mehta</p>

// //                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 10px 0", fontWeight: "400", textAlign: "center", fontFamily: "'Outfit'" }}>Delhi Public School, Delhi</p>

// //                 <p style={{ color: "#C4B5FD", lineHeight: "32px", fontSize: "32px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>1,240 min</p>

// //                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 14px 0", fontFamily: "'Outfit'", fontWeight: "400" }}>this week</p>

// //                 <div style={{
// //                   background: "#241642", borderRadius: "999px", padding: "6px 18px",
// //                   color: "#C4B5FD", fontSize: "12px", fontWeight: 600,
// //                   border: "1px solid #C4B5FD", marginBottom: "16px",
// //                   fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
// //                 }}>
// //                   {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "12px", height: "13px" }} /> */}
// //                   🎁 Crossword Coupon Winner
// //                 </div>

// //                 <div style={{
// //                   background: "linear-gradient(180deg, #8B5CF647 0%, #8B5CF612 100%)",
// //                   borderRadius: "12px 12px 0 0", width: "140px", height: "90px", padding: "22px 0", textAlign: "center"
// //                 }}>
// //                   <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#1</span>
// //                 </div>
// //               </div>

// //               {/* 3rd Place */}
// //               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
// //                 <img
// //                   src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
// //                   alt="bronze medal"
// //                   style={{ width: "15px", height: "19px", marginBottom: "6px", objectFit: "contain" }}
// //                 />
// //                 <div style={{
// //                   width: "54px", height: "54px", borderRadius: "50%",
// //                   border: "3px solid #C6B8FD", overflow: "hidden", marginBottom: "14px"
// //                 }}>
// //                   <img
// //                     src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
// //                     alt="Rohan Sharma"
// //                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //                   />
// //                 </div>

// //                 <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Rohan Sharma</p>

// //                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 10px 0", textAlign: "center", fontFamily: "'Outfit'" }}>St. Xavier's, Pune</p>

// //                 <p style={{ color: "#ffffff", lineHeight: "26px", fontSize: "26px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>820 min</p>

// //                 <p style={{ color: "#5C5248", fontWeight: 400, fontSize: "12px", margin: "0 0 14px 0", fontFamily: "'Outfit'" }}>this week</p>

// //                 <div style={{
// //                   background: "#241642", borderRadius: "999px", padding: "6px 18px",
// //                   color: "#C4B5FD", fontSize: "12px", fontWeight: 600,
// //                   border: "1px solid #C4B5FD", marginBottom: "16px",
// //                   fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
// //                 }}>
// //                   {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "14px", height: "14px" }} /> */}
// //                   🎁 Coupon Winner
// //                 </div>
// //                 <div style={{
// //                   background: "linear-gradient(180deg, #afbac533 0%, #c1cedc0d 100%)",
// //                   borderRadius: "12px 12px 0 0", width: "120px", height: "40px", padding: "5px 0", textAlign: "center"
// //                 }}>
// //                   <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#3</span>
// //                 </div>
// //               </div>

// //             </div>

// //             {/* Footer note */}
// //             <p style={{ color: "#4a453fff", fontSize: "12px", textAlign: "center", margin: "24px 0 0 0", paddingTop: "20px" }}>
// //               🎁 Top 3 readers in each age group win exclusive Crossword bookstore coupons — delivered to parent email every Monday.
// //             </p>

// //           </div>
// //         </div>
// //       </section>


// //       <section style={{
// //         background: "#141020",
// //         width: "900px",
// //         height: "484px",
// //         margin: "auto",
// //         borderRadius: "20px",
// //         border: "1px solid #251F38",
// //         fontFamily: "'Outfit', sans-serif",
// //         position: "relative",
// //         overflow: "hidden",
// //       }}>

// //         {leaderboardData.map((entry, index) => (
// //           <div
// //             key={entry.rank}
// //             style={{
// //               display: "flex",
// //               alignItems: "center",
// //               padding: "13px 24px",
// //               borderBottom: index < leaderboardData.length - 1 ? "1px solid #2C2620" : "none",
// //               gap: "16px",
// //               height: "69px"
// //             }}
// //           >

// //             {/* Rank */}
// //             <div style={{
// //               width: "32px",
// //               color: "#524B6E",
// //               fontSize: "20px",
// //               fontWeight: 700,
// //               flexShrink: 0,
// //               textAlign: "center",
// //               fontFamily: "'Outfit'",
// //               lineHeight: "100%",
// //             }}>
// //               #{entry.rank}
// //             </div>

// //             {/* Avatar */}
// //             <div style={{
// //               width: "42px",
// //               height: "42px",
// //               borderRadius: "50%",
// //               border: "2px solid #2a2a2a",
// //               overflow: "hidden",
// //               flexShrink: 0,
// //               background: "#1f1f1f",
// //             }}>
// //               <img
// //                 src={entry.avatar}
// //                 alt={entry.name}
// //                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //               />
// //             </div>

// //             {/* Name + Title */}
// //             <div style={{ width: "310px", flexShrink: 0 }}>
// //               <p style={{ color: "#F0EAE2", fontSize: "14px", fontWeight: 600, margin: "0 0 5px 0", lineHeight: "100%", fontFamily: "'Outfit'" }}>
// //                 {entry.name}
// //               </p>
// //               <p style={{ color: "#8370B9", fontSize: "12px", fontWeight: 500, margin: 0, lineHeight: "100%", fontFamily: "'Outfit'" }}>
// //                 {entry.title}
// //               </p>
// //             </div>

// //             {/* Progress Bar */}
// //             <div style={{
// //               flex: 1,
// //               height: "5px",
// //               width: "92px",
// //               background: "#5B3AA8",
// //               borderRadius: "999px",
// //               overflow: "hidden",
// //             }}>
// //               <div style={{
// //                 height: "100%",
// //                 width: `${(entry.puzzles / maxPuzzles) * 100}%`,
// //                 background: "#5945a0",
// //                 borderRadius: "999px",
// //               }} />
// //             </div>

// //             {/* Puzzles · Accuracy */}
// //             <div style={{
// //               width: "200px",
// //               flexShrink: 0,
// //               display: "flex",
// //               flexDirection: "column",
// //               alignItems: "flex-end",
// //               gap: "2px",
// //             }}>
// //               <div style={{
// //                 display: "flex",
// //                 alignItems: "baseline",
// //                 gap: "6px",
// //               }}>
// //                 <span style={{
// //                   color: "#C3BAE0",
// //                   fontSize: "14px",
// //                   fontWeight: 700,
// //                   fontFamily: "'Outfit'",
// //                 }}>
// //                   {entry.puzzles} puzzles
// //                 </span>
// //                 <span style={{
// //                   color: "#C3BAE0",
// //                   fontSize: "15px",
// //                   fontWeight: 2000,
// //                   fontFamily: "'Outfit'",
// //                 }}>
// //                   -
// //                 </span>
// //                 <span style={{
// //                   color: "#C3BAE0",
// //                   fontSize: "14px",
// //                   fontWeight: 700,
// //                   fontFamily: "'Outfit'",
// //                 }}>
// //                   {entry.accuracy}%
// //                 </span>
// //               </div>
// //               <span style={{
// //                 color: "#524B6E",
// //                 fontSize: "11px",
// //                 fontWeight: 400,
// //                 fontFamily: "'Outfit'",
// //               }}>
// //                 accuracy
// //               </span>
// //             </div>

// //             {/* Rank Change */}
// //             <div style={{
// //               width: "40px",
// //               flexShrink: 0,
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "flex-end",
// //               gap: "1px",
// //             }}>
// //               <span style={{ fontSize: "12px", color: entry.change > 0 ? "#22c55e" : "#ef4444" }}>
// //                 {entry.change > 0 ? "▲" : "▼"}
// //               </span>
// //               <span style={{ color: entry.change > 0 ? "#22c55e" : "#ef4444", fontSize: "14px", fontWeight: 700 }}>
// //                 {Math.abs(entry.change)}
// //               </span>
// //             </div>

// //           </div>
// //         ))}

// //       </section>


// //       <section style={{
// //         background: "#030303ff",
// //         padding: "16px",
// //         fontFamily: "'Outfit', sans-serif",
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "12px",
// //         width: "940px",
// //         marginLeft: "auto",
// //         marginRight: "auto",
// //         marginTop: "0px",
// //         marginBottom: "0px",
// //       }}>

// //         {/* Row 1 - Rank Banner */}
// //         <div style={{
// //           background: "#141020",
// //           borderRadius: "16px",
// //           border: "1px solid #39334F",
// //           padding: "20px 24px",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "space-between",
// //           gap: "16px",
// //           width: "100%",
// //           height: "103px",
// //           boxSizing: "border-box",
// //         }}>
// //           {/* Left - Avatar + Text */}
// //           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
// //             <div style={{
// //               width: "60px", height: "61px", borderRadius: "50%",
// //               overflow: "hidden", flexShrink: 0, background: "#2a2a2a",
// //             }}>
// //               <img
// //                 src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
// //                 alt="family"
// //                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //               />
// //             </div>
// //             <div>
// //               <p style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: 600, color: "#f0eae2", lineHeight: "1.4", fontFamily: "'Outfit'" }}>
// //                 Your child <span style={{ color: "#A78BFA" }}>Kavya</span> is ranked{" "}
// //                 <span style={{ color: "#A78BFA" }}>#47</span> out of{" "}
// //                 <span style={{ color: "#A78BFA" }}>1,283 readers</span> in Primary this week.
// //               </p>

// //               <p style={{ margin: 0, fontSize: "13px", color: "#9B8F85", fontWeight: 400, fontFamily: "'Outfit'" }}>
// //                 She read 340 minutes this week. Keep it up — the top 10 is within reach!
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right - CTA Button */}
// //           <button style={{
// //             background: "#8B5CF6",
// //             border: "none",
// //             borderRadius: "999px",
// //             color: "#ffffff",
// //             fontSize: "13px",
// //             fontWeight: 600,
// //             cursor: "pointer",
// //             lineHeight: "100%",
// //             flexShrink: 0,
// //             fontFamily: "'Outfit'",
// //             whiteSpace: "nowrap",
// //             width: "171.36px",
// //             height: "34px",
// //           }}>
// //             Log Today's Reading
// //           </button>
// //         </div>

// //         {/* Row 2 - Stats Cards */}
// //         <div style={{ display: "flex", gap: "12px", height: "55px" }}>

// //           {/* Stat 1 */}
// //           <div style={{
// //             flex: 1, background: "#141020", borderRadius: "14px",
// //             border: "1px solid #39334F", padding: "18px 20px",
// //             display: "flex", alignItems: "center", gap: "12px",
// //             height: "55px", width: "337.3299865722656px"
// //           }}>
// //             <span style={{ fontSize: "20px", flexShrink: 0 }}>📚</span>
// //             <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
// //               4,821 reading sessions logged this week
// //             </p>
// //           </div>

// //           {/* Stat 2 */}
// //           {/* <div style={{
// //             flex: 1, background: "#1a1a1a", borderRadius: "14px",
// //             border: "1px solid #2a2a2a", padding: "18px 20px",
// //             display: "flex", alignItems: "center", gap: "12px",
// //           }}>
// //             <span style={{ fontSize: "24px", flexShrink: 0 }}>🕐</span>
// //             <p style={{ margin: 0, color: "#f0eae2", fontSize: "14px", fontWeight: 600 }}>
// //               Avg. 38 min/day across all groups
// //             </p>
// //           </div> */}
// //           <div style={{
// //             flex: 1, background: "#141020", borderRadius: "14px",
// //             border: "1px solid #39334F", padding: "18px 20px",
// //             display: "flex", alignItems: "center", gap: "12px",
// //             height: "55px", width: "337.3299865722656px"
// //           }}>
// //             <span style={{ fontSize: "20px", flexShrink: 0 }}>🕐</span>
// //             <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
// //               Avg. 38 min/day across all groupsek
// //             </p>
// //           </div>

// //           {/* Stat 3 */}
// //           {/* <div style={{
// //             flex: 1, background: "#1a1a1a", borderRadius: "14px",
// //             border: "1px solid #2a2a2a", padding: "18px 20px",
// //             display: "flex", alignItems: "center", gap: "12px",
// //           }}>
// //             <span style={{ fontSize: "24px", flexShrink: 0 }}>🏫</span>
// //             <p style={{ margin: 0, color: "#f0eae2", fontSize: "14px", fontWeight: 600 }}>
// //               312 schools participating nationwide
// //             </p>
// //           </div> */}
// //           <div style={{
// //             flex: 1, background: "#141020", borderRadius: "14px",
// //             border: "1px solid #39334F", padding: "18px 20px",
// //             display: "flex", alignItems: "center", gap: "12px",
// //             height: "55px", width: "337.3299865722656px"
// //           }}>
// //             <span style={{ fontSize: "20px", flexShrink: 0 }}>🏫</span>
// //             <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
// //               312 schools participating nationwide
// //             </p>
// //           </div>

// //         </div>

// //         {/* Row 3 - Rewards Banner */}
// //         <div style={{
// //           background: "#141020",
// //           borderRadius: "16px",
// //           border: "1px solid #2a2a2a",
// //           borderLeft: "4px solid #8B5CF6",
// //           padding: "24px 28px",
// //           display: "flex",
// //           alignItems: "center",
// //           height: "171px",
// //           justifyContent: "space-between",
// //           gap: "20px",
// //         }}>
// //           {/* Left - Gift + Text */}
// //           <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
// //             <img
// //               src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
// //               alt="gift"
// //               style={{ width: "71px", height: "78px", flexShrink: 0, objectFit: "contain" }}
// //             />
// //             <div>
// //               <p style={{ margin: "0 0 8px 0", fontSize: "22px", fontWeight: 800, color: "#F0EAE2", fontFamily: "'Playfair Display'" }}>
// //                 Winners get real rewards!
// //               </p>
// //               <p style={{ margin: 0, fontSize: "14px", color: "#9B8F85", fontWeight: 400, lineHeight: "22.4px", maxWidth: "560px", fontFamily: "'Outfit'" }}>
// //                 Top 3 readers in each age group every week receive exclusive Crossword bookstore
// //                 coupons — delivered to the parent's registered email every Monday morning. New winners
// //                 announced weekly.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right - Outline Button */}
// //           <button style={{
// //             background: "transparent",
// //             border: "2px solid #A78BFA",
// //             borderRadius: "999px",
// //             padding: "10px 28px",
// //             color: "#A78BFA",
// //             fontSize: "14px",
// //             fontWeight: 600,
// //             cursor: "pointer",
// //             flexShrink: 0,
// //             fontFamily: "'Outfit'",
// //             whiteSpace: "nowrap",
// //             height: "44px",
// //             width: "180.7px",
// //             backgroundColor: "rgba(29, 17, 40, 1)",
// //           }}>
// //             How rewards work
// //           </button>
// //         </div>

// //       </section>


// //       <section style={{
// //         background: "#0E0C18",
// //         marginTop: "31px",
// //         padding: "64px 40px",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         textAlign: "center",
// //         fontFamily: "'Outfit', sans-serif",
// //         gap: "16px",
// //         height: "306px",
// //         border: "1px solid #2C2620",
// //         boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
// //       }}>

// //         {/* Title */}
// //         <h2 style={{
// //           color: "#f0eae2",
// //           fontSize: "28px",
// //           fontWeight: 800,
// //           marginTop: "-2px",
// //           fontFamily: "'Playfair Display'",
// //           lineHeight: "100%",
// //         }}>
// //           Want to see your child's name here?
// //         </h2>

// //         {/* Subtitle */}
// //         <p style={{
// //           color: "#9B8F85",
// //           fontSize: "15px",
// //           fontWeight: 400,
// //           margin: "0",
// //           fontFamily: "'Outfit'",
// //           lineHeight: "100%",
// //         }}>
// //           Download UltiMate and start your family's learning journey today.
// //         </p>

// //         {/* CTA Button */}
// //         <button style={{
// //           background: "#8B5CF6",
// //           border: "none",
// //           height: "47px",
// //           width: "198px",
// //           borderRadius: "999px",
// //           padding: "8px 10px",
// //           color: "#ffffff",
// //           fontSize: "15px",
// //           fontWeight: 700,
// //           cursor: "pointer",
// //           fontFamily: "'Outfit'",
// //           marginTop: "14px",
// //         }}>
// //           Download UltiMate
// //         </button>

// //         {/* Disclaimer */}
// //         <p style={{
// //           color: "#524B6E",
// //           fontSize: "12px",
// //           fontWeight: 400,
// //           margin: "8px 0 0 0",
// //           fontFamily: "'Outfit'",
// //           lineHeight: "19.2px",
// //           letterSpacing: "0%",
// //           maxWidth: "520px",

// //         }}>
// //           All reading minutes are self-reported and parent-verified. Only families who opted in appear publicly.
// //           Manage visibility in the UltiMate app under Privacy Settings. Crossword coupons are subject to availability
// //           and delivered to registered parent email.
// //         </p>

// //       </section>


// //     </main >
// //   );
// // }


// // function CategoryTab({ label, icon, active }: { label: string; icon: string; active?: boolean }) {
// //   return (
// //     <button
// //       className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-medium transition-colors ${active
// //         ? "bg-[#8B5CF6] border border-[#8B5CF6] text-white font-semibold"
// //         : "bg-[#141020] border border-[#251F38] text-[#9B8F85] "
// //         }`}
// //     >
// //       <span className="text-sm">{icon}</span>
// //       {label}
// //     </button>
// //   );
// // }













// "use client";
// import { Playfair_Display } from "next/font/google";
// import { useState, useEffect } from "react";

// const playfair = Playfair_Display({ subsets: ["latin"] });

// // ── Types ─────────────────────────────────────────────────────────────────
// interface LeaderboardEntry {
//   rank: number;
//   child_id: number;
//   display_name: string;
//   city: string | null;
//   profile_image: string | null;
//   milestone_title: string | null;
//   total_puzzles: number;
//   avg_accuracy: number;
// }

// // ── Constants ─────────────────────────────────────────────────────────────
// const AGE_CATEGORIES = [
//   { id: 1, label: "Pre-Primary", icon: "🐣" },
//   { id: 2, label: "Primary", icon: "📖" },
//   { id: 3, label: "Secondary I", icon: "🎒" },
//   { id: 4, label: "Secondary II", icon: "🎓" },
// ];

// const TIME_PERIODS = [
//   { value: "weekly", label: "Weekly" },
//   { value: "monthly", label: "Monthly" },
//   { value: "all_time", label: "All Time" },
// ];

// const PODIUM_ORDER = [1, 0, 2];
// const FALLBACK_AVATAR = "https://cdn-icons-png.flaticon.com/512/6997/6997662.png";
// const getAvatar = (entry: LeaderboardEntry) => entry.profile_image || FALLBACK_AVATAR;

// // ── useWindowSize ─────────────────────────────────────────────────────────
// function useWindowSize() {
//   const [size, setSize] = useState({ width: 1200, height: 800 });
//   useEffect(() => {
//     const update = () =>
//       setSize({ width: window.innerWidth, height: window.innerHeight });
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);
//   return size;
// }

// // ── Skeleton ──────────────────────────────────────────────────────────────
// const Skeleton = ({ w, h, r = 8 }: { w: string; h: string; r?: number }) => (
//   <div
//     style={{
//       width: w,
//       height: h,
//       borderRadius: r,
//       background:
//         "linear-gradient(90deg, #1a1530 25%, #251d42 50%, #1a1530 75%)",
//       backgroundSize: "200% 100%",
//       animation: "shimmer 1.5s infinite",
//     }}
//   />
// );

// // ── Category Tab ──────────────────────────────────────────────────────────
// function CategoryTab({
//   label,
//   icon,
//   active,
//   onClick,
//   isMobile,
// }: {
//   label: string;
//   icon: string;
//   active?: boolean;
//   onClick: () => void;
//   isMobile: boolean;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: 5,
//         padding: isMobile ? "6px 10px" : "8px 16px",
//         borderRadius: "999px",
//         fontSize: isMobile ? "0.7rem" : "0.8rem",
//         fontWeight: active ? 600 : 500,
//         cursor: "pointer",
//         transition: "all 0.2s",
//         fontFamily: "'Outfit'",
//         border: `1px solid ${active ? "#8B5CF6" : "#251F38"}`,
//         background: active ? "#8B5CF6" : "#141020",
//         color: active ? "#fff" : "#9B8F85",
//       }}>
//       <span style={{ fontSize: isMobile ? "0.75rem" : "0.875rem" }}>{icon}</span>
//       {label}
//     </button>
//   );
// }

// // ── Podium Config ─────────────────────────────────────────────────────────
// const getPodiumConfig = (isMobile: boolean) => [
//   // position 0 = 2nd place slot
//   {
//     avatarSize: isMobile ? 48 : 67,
//     podiumH: isMobile ? 44 : 60,
//     fontSize: isMobile ? 18 : 26,
//     transform: "translateY(0)",
//     medalW: isMobile ? 14 : 19,
//     medalH: isMobile ? 19 : 26,
//     medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583434.png",
//     podiumBg: "linear-gradient(180deg, #757c8333 0%, #A8B8C80D 100%)",
//     isFirst: false,
//     accentColor: "#ffffff",
//     valueColor: "#F0EAE2",
//   },
//   // position 1 = 1st place slot
//   {
//     avatarSize: isMobile ? 62 : 84,
//     podiumH: isMobile ? 66 : 90,
//     fontSize: isMobile ? 22 : 32,
//     transform: isMobile ? "translateY(-20px)" : "translateY(-32px)",
//     medalW: isMobile ? 20 : 27,
//     medalH: isMobile ? 28 : 39,
//     medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//     podiumBg: "linear-gradient(180deg, #8B5CF647 0%, #8B5CF612 100%)",
//     isFirst: true,
//     accentColor: "#C4B5FD",
//     valueColor: "#C4B5FD",
//   },
//   // position 2 = 3rd place slot
//   {
//     avatarSize: isMobile ? 40 : 54,
//     podiumH: isMobile ? 28 : 40,
//     fontSize: isMobile ? 18 : 26,
//     transform: "translateY(0)",
//     medalW: isMobile ? 11 : 15,
//     medalH: isMobile ? 14 : 19,
//     medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//     podiumBg: "linear-gradient(180deg, #afbac533 0%, #c1cedc0d 100%)",
//     isFirst: false,
//     accentColor: "#ffffff",
//     valueColor: "#ffffff",
//   },
// ];

// // ── Podium Card ───────────────────────────────────────────────────────────
// function PodiumCard({
//   entry,
//   position,
//   isMobile,
//   activePeriod,
// }: {
//   entry: LeaderboardEntry;
//   position: number;
//   isMobile: boolean;
//   activePeriod: string;
// }) {
//   const cfg = getPodiumConfig(isMobile)[position];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         transform: cfg.transform,
//         marginTop: cfg.isFirst ? (isMobile ? 10 : 15) : 0,
//       }}>
//       {/* Medal */}
//       <img
//         src={cfg.medalSrc}
//         alt="medal"
//         style={{
//           width: cfg.medalW,
//           height: cfg.medalH,
//           marginBottom: 6,
//           objectFit: "contain",
//         }}
//       />

//       {/* Avatar */}
//       <div
//         style={{
//           width: cfg.avatarSize,
//           height: cfg.avatarSize,
//           borderRadius: "50%",
//           border: "3px solid #C6B8FD",
//           overflow: "hidden",
//           marginBottom: isMobile ? 8 : 14,
//           boxShadow: cfg.isFirst
//             ? "0 0 24px rgba(139,92,246,0.45)"
//             : "none",
//         }}>
//         <img
//           src={getAvatar(entry)}
//           alt={entry.display_name}
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>

//       {/* Name */}
//       <p
//         style={{
//           color: cfg.accentColor,
//           fontSize: cfg.isFirst ? (isMobile ? 13 : 17) : isMobile ? 11 : 15,
//           fontWeight: 700,
//           margin: "0 0 2px 0",
//           textAlign: "center",
//           fontFamily: "'Outfit'",
//           maxWidth: isMobile ? 80 : 140,
//         }}>
//         {entry.display_name}
//       </p>

//       {/* City */}
//       {entry.city && !isMobile && (
//         <p
//           style={{
//             color: "#5C5248",
//             fontSize: 12,
//             margin: "0 0 10px 0",
//             textAlign: "center",
//             fontFamily: "'Outfit'",
//             fontWeight: 400,
//           }}>
//           {entry.city}
//         </p>
//       )}

//       {/* Puzzles count */}
//       <p
//         style={{
//           color: cfg.valueColor,
//           fontSize: cfg.fontSize,
//           fontWeight: 800,
//           lineHeight: `${cfg.fontSize + 4}px`,
//           margin: isMobile ? "4px 0 2px 0" : "0 0 2px 0",
//           fontFamily: "'Outfit'",
//         }}>
//         {entry.total_puzzles} puzzles
//       </p>

//       {/* Accuracy */}
//       <p
//         style={{
//           color: "#A78BFA",
//           fontSize: isMobile ? 11 : 14,
//           fontWeight: 600,
//           margin: "0 0 4px 0",
//           fontFamily: "'Outfit'",
//         }}>
//         {entry.avg_accuracy}% accuracy
//       </p>

//       <p
//         style={{
//           color: "#5C5248",
//           fontSize: isMobile ? 10 : 12,
//           margin: isMobile ? "0 0 8px 0" : "0 0 14px 0",
//           fontFamily: "'Outfit'",
//           fontWeight: 400,
//         }}>
//         this{" "}
//         {activePeriod === "weekly"
//           ? "week"
//           : activePeriod === "monthly"
//           ? "month"
//           : "time"}
//       </p>

//       {/* Coupon badge */}
//       {!isMobile && (
//         <div
//           style={{
//             background: "#241642",
//             borderRadius: "999px",
//             padding: "6px 18px",
//             color: "#C4B5FD",
//             fontSize: 12,
//             fontWeight: 600,
//             border: "1px solid #C4B5FD",
//             marginBottom: 16,
//             fontFamily: "'Outfit'",
//             display: "flex",
//             alignItems: "center",
//             gap: 6,
//           }}>
//           🎁 {cfg.isFirst ? "Crossword Coupon Winner" : "Coupon Winner"}
//         </div>
//       )}

//       {/* Podium block */}
//       <div
//         style={{
//           background: cfg.podiumBg,
//           borderRadius: "12px 12px 0 0",
//           width: cfg.isFirst ? (isMobile ? 90 : 140) : isMobile ? 70 : 120,
//           height: cfg.podiumH,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}>
//         <span
//           style={{
//             color: "#FFFFFF66",
//             fontSize: isMobile ? 16 : 24,
//             fontWeight: 800,
//             fontFamily: "'Outfit'",
//           }}>
//           #{entry.rank}
//         </span>
//       </div>
//     </div>
//   );
// }

// // ── Leaderboard Row ───────────────────────────────────────────────────────
// function LeaderboardRow({
//   entry,
//   isLast,
//   maxPuzzles,
//   isMobile,
// }: {
//   entry: LeaderboardEntry;
//   isLast: boolean;
//   maxPuzzles: number;
//   isMobile: boolean;
// }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         padding: isMobile ? "10px 14px" : "13px 24px",
//         borderBottom: !isLast ? "1px solid #251F38" : "none",
//         gap: isMobile ? 10 : 16,
//         minHeight: isMobile ? 60 : 69,
//       }}>
//       {/* Rank */}
//       <div
//         style={{
//           width: isMobile ? 24 : 32,
//           color: "#524B6E",
//           fontSize: isMobile ? 14 : 20,
//           fontWeight: 700,
//           flexShrink: 0,
//           textAlign: "center",
//           fontFamily: "'Outfit'",
//         }}>
//         #{entry.rank}
//       </div>

//       {/* Avatar */}
//       <div
//         style={{
//           width: isMobile ? 34 : 42,
//           height: isMobile ? 34 : 42,
//           borderRadius: "50%",
//           border: "2px solid #251F38",
//           overflow: "hidden",
//           flexShrink: 0,
//           background: "#1f1f1f",
//         }}>
//         <img
//           src={getAvatar(entry)}
//           alt={entry.display_name}
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>

//       {/* Name + milestone */}
//       <div
//         style={{
//           flexGrow: isMobile ? 1 : 0,
//           flexShrink: isMobile ? 1 : 0,
//           flexBasis: isMobile ? 0 : "auto",
//           width: isMobile ? undefined : 310,
//           minWidth: 0,
//         }}>
//         <p
//           style={{
//             color: "#F0EAE2",
//             fontSize: isMobile ? 12 : 14,
//             fontWeight: 600,
//             margin: "0 0 4px 0",
//             lineHeight: "100%",
//             fontFamily: "'Outfit'",
//             whiteSpace: "nowrap",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}>
//           {entry.display_name}
//         </p>
//         <p
//           style={{
//             color: "#8370B9",
//             fontSize: isMobile ? 10 : 12,
//             fontWeight: 500,
//             margin: 0,
//             lineHeight: "100%",
//             fontFamily: "'Outfit'",
//             whiteSpace: "nowrap",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}>
//           {entry.milestone_title || "—"}
//         </p>
//       </div>

//       {/* Progress bar — hidden on mobile */}
//       {!isMobile && (
//         <div
//           style={{
//             flex: 1,
//             height: 5,
//             background: "#5B3AA8",
//             borderRadius: "999px",
//             overflow: "hidden",
//           }}>
//           <div
//             style={{
//               height: "100%",
//               width: `${(entry.total_puzzles / maxPuzzles) * 100}%`,
//               background: "#5945a0",
//               borderRadius: "999px",
//             }}
//           />
//         </div>
//       )}

//       {/* Puzzles + accuracy */}
//       <div
//         style={{
//           width: isMobile ? "auto" : 200,
//           flexShrink: 0,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-end",
//           gap: 2,
//         }}>
//         <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
//           <span
//             style={{
//               color: "#C3BAE0",
//               fontSize: isMobile ? 11 : 14,
//               fontWeight: 700,
//               fontFamily: "'Outfit'",
//             }}>
//             {entry.total_puzzles} puzzles
//           </span>
//           {!isMobile && (
//             <>
//               <span style={{ color: "#C3BAE0", fontSize: 15, fontFamily: "'Outfit'" }}>
//                 -
//               </span>
//               <span
//                 style={{
//                   color: "#C3BAE0",
//                   fontSize: 14,
//                   fontWeight: 700,
//                   fontFamily: "'Outfit'",
//                 }}>
//                 {entry.avg_accuracy}%
//               </span>
//             </>
//           )}
//         </div>
//         <span
//           style={{
//             color: "#524B6E",
//             fontSize: isMobile ? 9 : 11,
//             fontWeight: 400,
//             fontFamily: "'Outfit'",
//           }}>
//           {isMobile ? `${entry.avg_accuracy}% acc` : "accuracy"}
//         </span>
//       </div>
//     </div>
//   );
// }

// // ── Main Component ────────────────────────────────────────────────────────
// export default function WordlePage() {
//   const [activeCategory, setActiveCategory] = useState(3);
//   const [activePeriod, setActivePeriod] = useState("weekly");
//   const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { width } = useWindowSize();

//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;
//   const contentMaxWidth = isTablet ? "95%" : 900;
//   const sectionPadding = isMobile ? "32px 16px 16px" : "48px 40px 16px";
//   const outerPadding = isMobile ? "0 12px" : "0 16px";

//   const fetchLeaderboard = async (categoryId: number, period: string) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(
//         `/wordquest/api/?age_category_id=${categoryId}&time_period=${period}`
//       );
//       if (!res.ok) throw new Error("Failed to fetch leaderboard");
//       const json = await res.json();
//       if (json.code === 200) {
//         setLeaderboard(json.data);
//       } else {
//         throw new Error(json.message || "Something went wrong");
//       }
//     } catch (err: any) {
//       console.error("Error fetching leaderboard:", err);
//       setError(err.message || "Failed to load leaderboard");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLeaderboard(activeCategory, activePeriod);
//   }, [activeCategory, activePeriod]);

//   const activeCategoryLabel =
//     AGE_CATEGORIES.find((c) => c.id === activeCategory)?.label || "";
//   const top3 = leaderboard.slice(0, 3);
//   const rest = leaderboard.slice(3);
//   const maxPuzzles = Math.max(...rest.map((e) => e.total_puzzles), 1);
//   const podiumEntries = PODIUM_ORDER.map((i) => top3[i]).filter(Boolean);

//   return (
//     <main
//       style={{
//         minHeight: "100vh",
//         background: "#080705",
//         fontFamily: "'Outfit', sans-serif",
//       }}>
//       <style>{`
//         @keyframes shimmer {
//           0% { background-position: 200% 0; }
//           100% { background-position: -200% 0; }
//         }
//       `}</style>

//       {/* ── Hero Header ── */}
//       <section
//         style={{
//           paddingTop: isMobile ? 24 : 40,
//           paddingLeft: isMobile ? 16 : 24,
//           paddingRight: isMobile ? 16 : 24,
//           display: "flex",
//           justifyContent: "center",
//           background:
//             "radial-gradient(circle at center, #8B5CF638 0%, #080705 60%, #080705 100%)",
//         }}>
//         <div style={{ width: "100%", maxWidth: 900, textAlign: "center" }}>
//           <div style={{ marginBottom: 12, marginTop: 12 }}>
//             <span
//               style={{
//                 color: "#A78BFA",
//                 fontSize: isMobile ? 11 : 13,
//                 fontWeight: 700,
//                 letterSpacing: "0.4em",
//                 textTransform: "uppercase",
//                 fontFamily: "'Outfit'",
//               }}>
//               WORDQUEST LEADERBOARD
//             </span>
//           </div>

//           <h1
//             className={playfair.className}
//             style={{
//               color: "#f0f0f0",
//               fontSize: isMobile ? "1.8rem" : "3rem",
//               lineHeight: 1.1,
//               fontWeight: 800,
//               marginBottom: isMobile ? 14 : 24,
//             }}>
//             India's Sharpest Young Minds
//           </h1>

//           <p
//             className={playfair.className}
//             style={{
//               color: "#9ca3af",
//               fontSize: isMobile ? 14 : 17,
//               fontStyle: "italic",
//               opacity: 0.8,
//               marginBottom: isMobile ? 14 : 20,
//             }}>
//             Ranked by puzzles cracked, words mastered, and accuracy earned.
//           </p>

//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 12,
//               padding: isMobile ? "5px 14px" : "6px 20px",
//               borderRadius: "999px",
//               border: "1px solid #8B5CF6",
//               background:
//                 "linear-gradient(94.61deg, #2D1F4A 0%, #231640 100%)",
//               marginBottom: isMobile ? 20 : 28,
//             }}>
//             <p
//               style={{
//                 color: "#C4B5FD",
//                 fontSize: isMobile ? 11 : 14,
//                 fontWeight: 600,
//                 margin: 0,
//                 fontFamily: "'Outfit'",
//                 textAlign: "center",
//               }}>
//               🎁 Top 3 win WordQuest Master badges + Crossword coupons weekly!
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Controls ── */}
//       <div
//         style={{
//           background: "#0f0f0f",
//           padding: isMobile ? "12px" : "14px 24px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: isMobile ? 10 : 16,
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//         }}>
//         {/* Category tabs */}
//         <div
//           style={{
//             display: "flex",
//             gap: isMobile ? 6 : 8,
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}>
//           {AGE_CATEGORIES.map((cat) => (
//             <CategoryTab
//               key={cat.id}
//               label={cat.label}
//               icon={cat.icon}
//               active={activeCategory === cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               isMobile={isMobile}
//             />
//           ))}
//         </div>

//         {/* Time period pills */}
//         <div
//           style={{
//             display: "flex",
//             background: "#141020",
//             borderRadius: "999px",
//             padding: 4,
//             border: "1px solid rgba(255,255,255,0.06)",
//           }}>
//           {TIME_PERIODS.map((p) => (
//             <button
//               key={p.value}
//               onClick={() => setActivePeriod(p.value)}
//               style={{
//                 padding: isMobile ? "5px 14px" : "6px 20px",
//                 borderRadius: "999px",
//                 background:
//                   activePeriod === p.value ? "#8B5CF6" : "transparent",
//                 color: activePeriod === p.value ? "#fff" : "#9ca3af",
//                 fontSize: isMobile ? "0.7rem" : "0.8rem",
//                 fontWeight: 700,
//                 border: "none",
//                 cursor: "pointer",
//                 fontFamily: "'Outfit'",
//                 transition: "all 0.2s",
//               }}>
//               {p.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── Sub-header + Podium ── */}
//       <section
//         style={{
//           background: "#0f0f0f",
//           padding: sectionPadding,
//           fontFamily: "'Outfit', sans-serif",
//         }}>
//         <div style={{ maxWidth: contentMaxWidth, margin: "0 auto" }}>
//           <p
//             style={{
//               color: "#A78BFA",
//               fontSize: isMobile ? 11 : 13,
//               fontWeight: 700,
//               letterSpacing: "3px",
//               margin: "0 0 8px 0",
//               textTransform: "uppercase",
//               fontFamily: "'Outfit'",
//             }}>
//             Wordquest
//           </p>

//           <h1
//             style={{
//               color: "#ffffff",
//               fontSize: isMobile ? 20 : 28,
//               fontWeight: 800,
//               margin: "0 0 10px 0",
//               lineHeight: 1.2,
//               fontFamily: "'Playfair Display'",
//             }}>
//             Top puzzle solvers — {activeCategoryLabel}
//           </h1>

//           <p
//             style={{
//               color: "#9B8F85",
//               fontSize: isMobile ? 13 : 15,
//               margin: "0 0 8px 0",
//               fontFamily: "'Outfit'",
//               fontWeight: 400,
//             }}>
//             Children ranked by accuracy and puzzles solved this{" "}
//             {activePeriod === "weekly"
//               ? "week"
//               : activePeriod === "monthly"
//               ? "month"
//               : "time"}.
//           </p>

//           <div
//             style={{
//               display: "inline-block",
//               border: "1px solid #5E40A8",
//               borderRadius: "999px",
//               padding: "6px 16px",
//               color: "#C4B5FD",
//               fontSize: isMobile ? 11 : 12,
//               marginBottom: isMobile ? 20 : 32,
//               backgroundColor: "#241642",
//               fontFamily: "'Outfit'",
//               fontWeight: 600,
//             }}>
//             Top 3 readers receive Crossword Bookstore coupons every Monday
//           </div>

//           {/* Podium card */}
//           <div
//             style={{
//               background: "#141020",
//               borderRadius: 20,
//               padding: isMobile ? "32px 16px 24px" : "48px 32px 32px",
//               border: "1px solid #2C2620",
//             }}>
//             {loading ? (
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-end",
//                   justifyContent: "center",
//                   gap: isMobile ? 14 : 26,
//                   minHeight: isMobile ? 180 : 280,
//                 }}>
//                 {[
//                   isMobile ? 50 : 80,
//                   isMobile ? 80 : 120,
//                   isMobile ? 35 : 60,
//                 ].map((h, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       gap: 8,
//                     }}>
//                     <Skeleton
//                       w={isMobile ? "50px" : "80px"}
//                       h={isMobile ? "50px" : "80px"}
//                       r={999}
//                     />
//                     <Skeleton w={isMobile ? "60px" : "80px"} h="14px" />
//                     <Skeleton w={isMobile ? "50px" : "60px"} h="12px" />
//                     <div
//                       style={{
//                         height: h,
//                         width: isMobile ? 80 : 120,
//                         background: "#1a1530",
//                         borderRadius: "12px 12px 0 0",
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             ) : error ? (
//               <div
//                 style={{
//                   textAlign: "center",
//                   color: "#9B8F85",
//                   padding: "60px 0",
//                 }}>
//                 {error}
//               </div>
//             ) : podiumEntries.length === 0 ? (
//               <div
//                 style={{
//                   textAlign: "center",
//                   color: "#9B8F85",
//                   padding: "60px 0",
//                 }}>
//                 No data available for this period.
//               </div>
//             ) : (
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-end",
//                   justifyContent: "center",
//                   gap: isMobile ? 10 : 26,
//                 }}>
//                 {podiumEntries.map((entry, idx) => (
//                   <PodiumCard
//                     key={entry.rank}
//                     entry={entry}
//                     position={idx}
//                     isMobile={isMobile}
//                     activePeriod={activePeriod}
//                   />
//                 ))}
//               </div>
//             )}

//             <p
//               style={{
//                 color: "#4a453fff",
//                 fontSize: isMobile ? 10 : 12,
//                 textAlign: "center",
//                 margin: "24px 0 0 0",
//                 paddingTop: 20,
//               }}>
//               🎁 Top 3 puzzle solvers in each age group win exclusive Crossword
//               bookstore coupons — delivered to parent email every Monday.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Rest of leaderboard ── */}
//       {!loading && !error && rest.length > 0 && (
//         <div
//           style={{
//             maxWidth: contentMaxWidth,
//             margin: "24px auto 0",
//             padding: outerPadding,
//           }}>
//           <div
//             style={{
//               background: "#141020",
//               borderRadius: 20,
//               border: "1px solid #251F38",
//               overflow: "hidden",
//             }}>
//             {rest.map((entry, index) => (
//               <LeaderboardRow
//                 key={entry.child_id}
//                 entry={entry}
//                 isLast={index === rest.length - 1}
//                 maxPuzzles={maxPuzzles}
//                 isMobile={isMobile}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ── Rewards Banner ── */}
//       {/* <div
//         style={{
//           maxWidth: contentMaxWidth,
//           margin: "24px auto 0",
//           padding: outerPadding,
//         }}>
//         <div
//           style={{
//             background: "#141020",
//             borderRadius: 16,
//             border: "1px solid #251F38",
//             borderLeft: "4px solid #8B5CF6",
//             padding: isMobile ? "16px" : "24px 28px",
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",
//             alignItems: isMobile ? "flex-start" : "center",
//             justifyContent: "space-between",
//             gap: isMobile ? 14 : 20,
//           }}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: isMobile ? "flex-start" : "center",
//               gap: isMobile ? 14 : 24,
//             }}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
//               alt="gift"
//               style={{
//                 width: isMobile ? 48 : 71,
//                 height: isMobile ? 52 : 78,
//                 flexShrink: 0,
//                 objectFit: "contain",
//               }}
//             />
//             <div>
//               <p
//                 style={{
//                   margin: "0 0 8px 0",
//                   fontSize: isMobile ? 16 : 22,
//                   fontWeight: 800,
//                   color: "#F0EAE2",
//                   fontFamily: "'Playfair Display'",
//                 }}>
//                 Winners get real rewards!
//               </p>
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: isMobile ? 12 : 14,
//                   color: "#9B8F85",
//                   fontWeight: 400,
//                   lineHeight: "22.4px",
//                   fontFamily: "'Outfit'",
//                 }}>
//                 Top 3 puzzle solvers in each age group every week receive
//                 exclusive Crossword bookstore coupons — delivered to the
//                 parent's registered email every Monday morning.
//               </p>
//             </div>
//           </div>
//           <button
//             style={{
//               background: "rgba(29, 17, 40, 1)",
//               border: "2px solid #A78BFA",
//               borderRadius: "999px",
//               padding: "10px 28px",
//               color: "#A78BFA",
//               fontSize: isMobile ? 12 : 14,
//               fontWeight: 600,
//               cursor: "pointer",
//               flexShrink: 0,
//               fontFamily: "'Outfit'",
//               whiteSpace: "nowrap",
//               height: 44,
//               alignSelf: isMobile ? "flex-start" : "center",
//             }}>
//             How rewards work
//           </button>
//         </div>
//       </div> */}

//       {/* ── CTA Footer ── */}
//       <section
//         style={{
//           background: "#0E0C18",
//           marginTop: 31,
//           padding: isMobile ? "40px 20px" : "64px 40px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           gap: 16,
//           border: "1px solid #2C2620",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
//         }}>
//         <h2
//           style={{
//             color: "#f0eae2",
//             fontSize: isMobile ? 20 : 28,
//             fontWeight: 800,
//             fontFamily: "'Playfair Display'",
//             lineHeight: "100%",
//             margin: 0,
//           }}>
//           Want to see your child's name here?
//         </h2>
//         <p
//           style={{
//             color: "#9B8F85",
//             fontSize: isMobile ? 13 : 15,
//             fontWeight: 400,
//             margin: 0,
//             fontFamily: "'Outfit'",
//           }}>
//           Download UltiMate and start your family's learning journey today.
//         </p>
//         <button
//           style={{
//             background: "#8B5CF6",
//             border: "none",
//             height: 47,
//             width: 198,
//             borderRadius: "999px",
//             color: "#ffffff",
//             fontSize: 15,
//             fontWeight: 700,
//             cursor: "pointer",
//             fontFamily: "'Outfit'",
//             marginTop: 14,
//           }}>
//           Download UltiMate
//         </button>
//         <p
//           style={{
//             color: "#524B6E",
//             fontSize: isMobile ? 11 : 12,
//             fontWeight: 400,
//             margin: "8px 0 0 0",
//             fontFamily: "'Outfit'",
//             lineHeight: "19.2px",
//             maxWidth: 520,
//           }}>
//           All puzzle results are verified through the UltiMate app. Only
//           families who opted in appear publicly. Manage visibility under Privacy
//           Settings. Crossword coupons are subject to availability and delivered
//           to registered parent email.
//         </p>
//       </section>
//     </main>
//   );
// }



"use client";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"] });

// ── Types ─────────────────────────────────────────────────────────────────
interface LeaderboardEntry {
  rank: number;
  child_id: number;
  display_name: string;
  city: string | null;
  profile_image: string | null;
  milestone_title: string | null;
  total_puzzles: number;
  avg_accuracy: number;
}

// ── Constants ─────────────────────────────────────────────────────────────
const AGE_CATEGORIES = [
  { id: 1, label: "Pre-Primary", icon: "🐣" },
  { id: 2, label: "Primary", icon: "📖" },
  { id: 3, label: "Secondary I", icon: "🎒" },
  { id: 4, label: "Secondary II", icon: "🎓" },
];

const TIME_PERIODS = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "all_time", label: "All Time" },
];

const PODIUM_ORDER = [1, 0, 2];
const FALLBACK_AVATAR = "https://cdn-icons-png.flaticon.com/512/6997/6997662.png";
const getAvatar = (entry: LeaderboardEntry) => entry.profile_image || FALLBACK_AVATAR;

// ── useWindowSize ─────────────────────────────────────────────────────────
function useWindowSize() {
  const [size, setSize] = useState({ width: 1200, height: 800 });
  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

// ── Skeleton ──────────────────────────────────────────────────────────────
const Skeleton = ({ w, h, r = 8 }: { w: string; h: string; r?: number }) => (
  <div
    style={{
      width: w,
      height: h,
      borderRadius: r,
      background:
        "linear-gradient(90deg, #1a1530 25%, #251d42 50%, #1a1530 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
    }}
  />
);

// ── Category Tab ──────────────────────────────────────────────────────────
function CategoryTab({
  label,
  icon,
  active,
  onClick,
  isMobile,
}: {
  label: string;
  icon: string;
  active?: boolean;
  onClick: () => void;
  isMobile: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: isMobile ? "6px 10px" : "8px 16px",
        borderRadius: "999px",
        fontSize: isMobile ? "0.7rem" : "0.8rem",
        fontWeight: active ? 600 : 500,
        cursor: "pointer",
        transition: "all 0.2s",
        fontFamily: "'Outfit'",
        border: `1px solid ${active ? "#8B5CF6" : "#251F38"}`,
        background: active ? "#8B5CF6" : "#141020",
        color: active ? "#fff" : "#9B8F85",
      }}>
      <span style={{ fontSize: isMobile ? "0.75rem" : "0.875rem" }}>{icon}</span>
      {label}
    </button>
  );
}

// ── Podium Config ─────────────────────────────────────────────────────────
const getPodiumConfig = (isMobile: boolean) => [
  {
    avatarSize: isMobile ? 48 : 67,
    podiumH: isMobile ? 44 : 60,
    fontSize: isMobile ? 18 : 26,
    transform: "translateY(0)",
    medalW: isMobile ? 14 : 19,
    medalH: isMobile ? 19 : 26,
    medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583434.png",
    podiumBg: "linear-gradient(180deg, #757c8333 0%, #A8B8C80D 100%)",
    isFirst: false,
    accentColor: "#ffffff",
    valueColor: "#F0EAE2",
  },
  {
    avatarSize: isMobile ? 62 : 84,
    podiumH: isMobile ? 66 : 90,
    fontSize: isMobile ? 22 : 32,
    transform: isMobile ? "translateY(-20px)" : "translateY(-32px)",
    medalW: isMobile ? 20 : 27,
    medalH: isMobile ? 28 : 39,
    medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
    podiumBg: "linear-gradient(180deg, #8B5CF647 0%, #8B5CF612 100%)",
    isFirst: true,
    accentColor: "#C4B5FD",
    valueColor: "#C4B5FD",
  },
  {
    avatarSize: isMobile ? 40 : 54,
    podiumH: isMobile ? 28 : 40,
    fontSize: isMobile ? 18 : 26,
    transform: "translateY(0)",
    medalW: isMobile ? 11 : 15,
    medalH: isMobile ? 14 : 19,
    medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
    podiumBg: "linear-gradient(180deg, #afbac533 0%, #c1cedc0d 100%)",
    isFirst: false,
    accentColor: "#ffffff",
    valueColor: "#ffffff",
  },
];

// ── Podium Card ───────────────────────────────────────────────────────────
function PodiumCard({
  entry,
  position,
  isMobile,
  activePeriod,
}: {
  entry: LeaderboardEntry;
  position: number;
  isMobile: boolean;
  activePeriod: string;
}) {
  const cfg = getPodiumConfig(isMobile)[position];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: cfg.transform,
        marginTop: cfg.isFirst ? (isMobile ? 10 : 15) : 0,
      }}>

      {/* ── CHANGE 1: medal img → Image ── */}
      <Image
        src={cfg.medalSrc}
        alt="medal"
        width={cfg.medalW}
        height={cfg.medalH}
        style={{ marginBottom: 6, objectFit: "contain" }}
        unoptimized
      />

      {/* ── CHANGE 2: avatar img → Image with fill ── */}
      <div
        style={{
          width: cfg.avatarSize,
          height: cfg.avatarSize,
          borderRadius: "50%",
          border: "3px solid #C6B8FD",
          overflow: "hidden",
          marginBottom: isMobile ? 8 : 14,
          boxShadow: cfg.isFirst ? "0 0 24px rgba(139,92,246,0.45)" : "none",
          position: "relative",
          flexShrink: 0,
        }}>
        <Image
          src={getAvatar(entry)}
          alt={entry.display_name}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      <p
        style={{
          color: cfg.accentColor,
          fontSize: cfg.isFirst ? (isMobile ? 13 : 17) : isMobile ? 11 : 15,
          fontWeight: 700,
          margin: "0 0 2px 0",
          textAlign: "center",
          fontFamily: "'Outfit'",
          maxWidth: isMobile ? 80 : 140,
        }}>
        {entry.display_name}
      </p>

      {entry.city && !isMobile && (
        <p
          style={{
            color: "#5C5248",
            fontSize: 12,
            margin: "0 0 10px 0",
            textAlign: "center",
            fontFamily: "'Outfit'",
            fontWeight: 400,
          }}>
          {entry.city}
        </p>
      )}

      <p
        style={{
          color: cfg.valueColor,
          fontSize: cfg.fontSize,
          fontWeight: 800,
          lineHeight: `${cfg.fontSize + 4}px`,
          margin: isMobile ? "4px 0 2px 0" : "0 0 2px 0",
          fontFamily: "'Outfit'",
        }}>
        {entry.total_puzzles} puzzles
      </p>

      <p
        style={{
          color: "#A78BFA",
          fontSize: isMobile ? 11 : 14,
          fontWeight: 600,
          margin: "0 0 4px 0",
          fontFamily: "'Outfit'",
        }}>
        {entry.avg_accuracy}% accuracy
      </p>

      <p
        style={{
          color: "#5C5248",
          fontSize: isMobile ? 10 : 12,
          margin: isMobile ? "0 0 8px 0" : "0 0 14px 0",
          fontFamily: "'Outfit'",
          fontWeight: 400,
        }}>
        this{" "}
        {activePeriod === "weekly"
          ? "week"
          : activePeriod === "monthly"
          ? "month"
          : "time"}
      </p>

      {!isMobile && (
        <div
          style={{
            background: "#241642",
            borderRadius: "999px",
            padding: "6px 18px",
            color: "#C4B5FD",
            fontSize: 12,
            fontWeight: 600,
            border: "1px solid #C4B5FD",
            marginBottom: 16,
            fontFamily: "'Outfit'",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
          🎁 {cfg.isFirst ? "Crossword Coupon Winner" : "Coupon Winner"}
        </div>
      )}

      <div
        style={{
          background: cfg.podiumBg,
          borderRadius: "12px 12px 0 0",
          width: cfg.isFirst ? (isMobile ? 90 : 140) : isMobile ? 70 : 120,
          height: cfg.podiumH,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <span
          style={{
            color: "#FFFFFF66",
            fontSize: isMobile ? 16 : 24,
            fontWeight: 800,
            fontFamily: "'Outfit'",
          }}>
          #{entry.rank}
        </span>
      </div>
    </div>
  );
}

// ── Leaderboard Row ───────────────────────────────────────────────────────
function LeaderboardRow({
  entry,
  isLast,
  maxPuzzles,
  isMobile,
}: {
  entry: LeaderboardEntry;
  isLast: boolean;
  maxPuzzles: number;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "10px 14px" : "13px 24px",
        borderBottom: !isLast ? "1px solid #251F38" : "none",
        gap: isMobile ? 10 : 16,
        minHeight: isMobile ? 60 : 69,
      }}>

      <div
        style={{
          width: isMobile ? 24 : 32,
          color: "#524B6E",
          fontSize: isMobile ? 14 : 20,
          fontWeight: 700,
          flexShrink: 0,
          textAlign: "center",
          fontFamily: "'Outfit'",
        }}>
        #{entry.rank}
      </div>

      {/* ── CHANGE 3: avatar img → Image with fill ── */}
      <div
        style={{
          width: isMobile ? 34 : 42,
          height: isMobile ? 34 : 42,
          borderRadius: "50%",
          border: "2px solid #251F38",
          overflow: "hidden",
          flexShrink: 0,
          background: "#1f1f1f",
          position: "relative",
        }}>
        <Image
          src={getAvatar(entry)}
          alt={entry.display_name}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      <div
        style={{
          flexGrow: isMobile ? 1 : 0,
          flexShrink: isMobile ? 1 : 0,
          flexBasis: isMobile ? 0 : "auto",
          width: isMobile ? undefined : 310,
          minWidth: 0,
        }}>
        <p
          style={{
            color: "#F0EAE2",
            fontSize: isMobile ? 12 : 14,
            fontWeight: 600,
            margin: "0 0 4px 0",
            lineHeight: "100%",
            fontFamily: "'Outfit'",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          {entry.display_name}
        </p>
        <p
          style={{
            color: "#8370B9",
            fontSize: isMobile ? 10 : 12,
            fontWeight: 500,
            margin: 0,
            lineHeight: "100%",
            fontFamily: "'Outfit'",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          {entry.milestone_title || "—"}
        </p>
      </div>

      {!isMobile && (
        <div
          style={{
            flex: 1,
            height: 5,
            background: "#5B3AA8",
            borderRadius: "999px",
            overflow: "hidden",
          }}>
          <div
            style={{
              height: "100%",
              width: `${(entry.total_puzzles / maxPuzzles) * 100}%`,
              background: "#5945a0",
              borderRadius: "999px",
            }}
          />
        </div>
      )}

      <div
        style={{
          width: isMobile ? "auto" : 200,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 2,
        }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{
              color: "#C3BAE0",
              fontSize: isMobile ? 11 : 14,
              fontWeight: 700,
              fontFamily: "'Outfit'",
            }}>
            {entry.total_puzzles} puzzles
          </span>
          {!isMobile && (
            <>
              <span style={{ color: "#C3BAE0", fontSize: 15, fontFamily: "'Outfit'" }}>
                -
              </span>
              <span
                style={{
                  color: "#C3BAE0",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Outfit'",
                }}>
                {entry.avg_accuracy}%
              </span>
            </>
          )}
        </div>
        <span
          style={{
            color: "#524B6E",
            fontSize: isMobile ? 9 : 11,
            fontWeight: 400,
            fontFamily: "'Outfit'",
          }}>
          {isMobile ? `${entry.avg_accuracy}% acc` : "accuracy"}
        </span>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function WordlePage() {
  const [activeCategory, setActiveCategory] = useState(3);
  const [activePeriod, setActivePeriod] = useState("weekly");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowSize();
  const router = useRouter();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const contentMaxWidth = isTablet ? "95%" : 900;
  const sectionPadding = isMobile ? "32px 16px 16px" : "48px 40px 16px";
  const outerPadding = isMobile ? "0 12px" : "0 16px";

  const fetchLeaderboard = async (categoryId: number, period: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/wordquest/api/?age_category_id=${categoryId}&time_period=${period}`
      );
      if (!res.ok) throw new Error("Failed to fetch leaderboard");
      const json = await res.json();
      if (json.code === 200) {
        setLeaderboard(json.data);
      } else {
        throw new Error(json.message || "Something went wrong");
      }
    } catch (err: unknown) {
      // ── CHANGE 4: err: any → err: unknown ──
      console.error("Error fetching leaderboard:", err);
      setError(err instanceof Error ? err.message : "Failed to load leaderboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(activeCategory, activePeriod);
  }, [activeCategory, activePeriod]);

  const activeCategoryLabel =
    AGE_CATEGORIES.find((c) => c.id === activeCategory)?.label || "";
  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);
  const maxPuzzles = Math.max(...rest.map((e) => e.total_puzzles), 1);
  const podiumEntries = PODIUM_ORDER.map((i) => top3[i]).filter(Boolean);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080705",
        fontFamily: "'Outfit', sans-serif",
      }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* ── Hero Header ── */}
      <section
        style={{
          paddingTop: isMobile ? 24 : 40,
          paddingLeft: isMobile ? 16 : 24,
          paddingRight: isMobile ? 16 : 24,
          display: "flex",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center, #8B5CF638 0%, #080705 60%, #080705 100%)",
        }}>
        <div style={{ width: "100%", maxWidth: 900, textAlign: "center" }}>
          <div style={{ marginBottom: 12, marginTop: 12 }}>
            <span
              style={{
                color: "#A78BFA",
                fontSize: isMobile ? 11 : 13,
                fontWeight: 700,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontFamily: "'Outfit'",
              }}>
              WORDQUEST LEADERBOARD
            </span>
          </div>

          {/* ── CHANGE 5: "India's" → "India&apos;s" ── */}
          <h1
            className={playfair.className}
            style={{
              color: "#f0f0f0",
              fontSize: isMobile ? "1.8rem" : "3rem",
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: isMobile ? 14 : 24,
            }}>
            India&apos;s Sharpest Young Minds
          </h1>

          <p
            className={playfair.className}
            style={{
              color: "#9ca3af",
              fontSize: isMobile ? 14 : 17,
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: isMobile ? 14 : 20,
            }}>
            Ranked by puzzles cracked, words mastered, and accuracy earned.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: isMobile ? "5px 14px" : "6px 20px",
              borderRadius: "999px",
              border: "1px solid #8B5CF6",
              background: "linear-gradient(94.61deg, #2D1F4A 0%, #231640 100%)",
              marginBottom: isMobile ? 20 : 28,
            }}>
            <p
              style={{
                color: "#C4B5FD",
                fontSize: isMobile ? 11 : 14,
                fontWeight: 600,
                margin: 0,
                fontFamily: "'Outfit'",
                textAlign: "center",
              }}>
              🎁 Top 3 win WordQuest Master badges + Crossword coupons weekly!
            </p>
          </div>
        </div>
      </section>

      {/* ── Controls ── */}
      <div
        style={{
          background: "#0f0f0f",
          padding: isMobile ? "12px" : "14px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 10 : 16,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
        <div
          style={{
            display: "flex",
            gap: isMobile ? 6 : 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          {AGE_CATEGORIES.map((cat) => (
            <CategoryTab
              key={cat.id}
              label={cat.label}
              icon={cat.icon}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            background: "#141020",
            borderRadius: "999px",
            padding: 4,
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
          {TIME_PERIODS.map((p) => (
            <button
              key={p.value}
              onClick={() => setActivePeriod(p.value)}
              style={{
                padding: isMobile ? "5px 14px" : "6px 20px",
                borderRadius: "999px",
                background: activePeriod === p.value ? "#8B5CF6" : "transparent",
                color: activePeriod === p.value ? "#fff" : "#9ca3af",
                fontSize: isMobile ? "0.7rem" : "0.8rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Outfit'",
                transition: "all 0.2s",
              }}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sub-header + Podium ── */}
      <section
        style={{
          background: "#0f0f0f",
          padding: sectionPadding,
          fontFamily: "'Outfit', sans-serif",
        }}>
        <div style={{ maxWidth: contentMaxWidth, margin: "0 auto" }}>
          <p
            style={{
              color: "#A78BFA",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 8px 0",
              textTransform: "uppercase",
              fontFamily: "'Outfit'",
            }}>
            Wordquest
          </p>

          <h1
            style={{
              color: "#ffffff",
              fontSize: isMobile ? 20 : 28,
              fontWeight: 800,
              margin: "0 0 10px 0",
              lineHeight: 1.2,
              fontFamily: "'Playfair Display'",
            }}>
            Top puzzle solvers — {activeCategoryLabel}
          </h1>

          <p
            style={{
              color: "#9B8F85",
              fontSize: isMobile ? 13 : 15,
              margin: "0 0 8px 0",
              fontFamily: "'Outfit'",
              fontWeight: 400,
            }}>
            Children ranked by accuracy and puzzles solved this{" "}
            {activePeriod === "weekly"
              ? "week"
              : activePeriod === "monthly"
              ? "month"
              : "time"}.
          </p>

          <div
            style={{
              display: "inline-block",
              border: "1px solid #5E40A8",
              borderRadius: "999px",
              padding: "6px 16px",
              color: "#C4B5FD",
              fontSize: isMobile ? 11 : 12,
              marginBottom: isMobile ? 20 : 32,
              backgroundColor: "#241642",
              fontFamily: "'Outfit'",
              fontWeight: 600,
            }}>
            Top 3 readers receive Crossword Bookstore coupons every Monday
          </div>

          {/* Podium card */}
          <div
            style={{
              background: "#141020",
              borderRadius: 20,
              padding: isMobile ? "32px 16px 24px" : "48px 32px 32px",
              border: "1px solid #2C2620",
            }}>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: isMobile ? 14 : 26,
                  minHeight: isMobile ? 180 : 280,
                }}>
                {[isMobile ? 50 : 80, isMobile ? 80 : 120, isMobile ? 35 : 60].map(
                  (h, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                      }}>
                      <Skeleton
                        w={isMobile ? "50px" : "80px"}
                        h={isMobile ? "50px" : "80px"}
                        r={999}
                      />
                      <Skeleton w={isMobile ? "60px" : "80px"} h="14px" />
                      <Skeleton w={isMobile ? "50px" : "60px"} h="12px" />
                      <div
                        style={{
                          height: h,
                          width: isMobile ? 80 : 120,
                          background: "#1a1530",
                          borderRadius: "12px 12px 0 0",
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            ) : error ? (
              <div style={{ textAlign: "center", color: "#9B8F85", padding: "60px 0" }}>
                {error}
              </div>
            ) : podiumEntries.length === 0 ? (
              <div style={{ textAlign: "center", color: "#9B8F85", padding: "60px 0" }}>
                No data available for this period.
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: isMobile ? 10 : 26,
                }}>
                {podiumEntries.map((entry, idx) => (
                  <PodiumCard
                    key={entry.rank}
                    entry={entry}
                    position={idx}
                    isMobile={isMobile}
                    activePeriod={activePeriod}
                  />
                ))}
              </div>
            )}

            <p
              style={{
                color: "#4a453fff",
                fontSize: isMobile ? 10 : 12,
                textAlign: "center",
                margin: "24px 0 0 0",
                paddingTop: 20,
              }}>
              🎁 Top 3 puzzle solvers in each age group win exclusive Crossword
              bookstore coupons — delivered to parent email every Monday.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rest of leaderboard ── */}
      {!loading && !error && rest.length > 0 && (
        <div
          style={{
            maxWidth: contentMaxWidth,
            margin: "24px auto 0",
            padding: outerPadding,
          }}>
          <div
            style={{
              background: "#141020",
              borderRadius: 20,
              border: "1px solid #251F38",
              overflow: "hidden",
            }}>
            {rest.map((entry, index) => (
              <LeaderboardRow
                key={entry.child_id}
                entry={entry}
                isLast={index === rest.length - 1}
                maxPuzzles={maxPuzzles}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Rewards Banner (commented out — kept as-is) ── */}
      {/* <div ... /> */}

      {/* ── CTA Footer ── */}
      <section
        style={{
          background: "#0E0C18",
          marginTop: 31,
          padding: isMobile ? "40px 20px" : "64px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 16,
          border: "1px solid #2C2620",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}>

        {/* ── CHANGE 6: "child's" → "child&apos;s" ── */}
        <h2
          style={{
            color: "#f0eae2",
            fontSize: isMobile ? 20 : 28,
            fontWeight: 800,
            fontFamily: "'Playfair Display'",
            lineHeight: "100%",
            margin: 0,
          }}>
          Want to see your child&apos;s name here?
        </h2>

        {/* ── CHANGE 7: "family's" → "family&apos;s" ── */}
        <p
          style={{
            color: "#9B8F85",
            fontSize: isMobile ? 13 : 15,
            fontWeight: 400,
            margin: 0,
            fontFamily: "'Outfit'",
          }}>
          Download UltiMate and start your family&apos;s learning journey today.
        </p>

        <button
        onClick={()=>router.push("/download-app")}
          style={{
            background: "#8B5CF6",
            border: "none",
            height: 47,
            width: 198,
            borderRadius: "999px",
            color: "#ffffff",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Outfit'",
            marginTop: 14,
          }}>
          Download UltiMate
        </button>

        <p
          style={{
            color: "#524B6E",
            fontSize: isMobile ? 11 : 12,
            fontWeight: 400,
            margin: "8px 0 0 0",
            fontFamily: "'Outfit'",
            lineHeight: "19.2px",
            maxWidth: 520,
          }}>
          All puzzle results are verified through the UltiMate app. Only
          families who opted in appear publicly. Manage visibility under Privacy
          Settings. Crossword coupons are subject to availability and delivered
          to registered parent email.
        </p>
      </section>
    </main>
  );
}