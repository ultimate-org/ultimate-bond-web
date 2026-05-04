// "use client";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({ subsets: ["latin"] });

// const leaderboardData = [
//   { rank: 4, name: "Priya Singh", title: "Chapter Champion", minutes: 450, streak: 22, change: 2, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
//   { rank: 5, name: "Vivaan Das", title: "Literary Luminary", minutes: 350, streak: 18, change: -1, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997674.png" },
//   { rank: 6, name: "Ananya Rao", title: "Wisdom Weaver", minutes: 510, streak: 15, change: 3, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997650.png" },
//   { rank: 7, name: "Kabir Nair", title: "Story Seeker", minutes: 280, streak: 12, change: -2, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
//   { rank: 8, name: "Ishita Gupta", title: "Page Turner", minutes: 640, streak: 20, change: 1, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997674.png" },
//   { rank: 9, name: "Saanvi Tiwari", title: "Tale Tracker", minutes: 490, streak: 9, change: -3, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997650.png" },
//   { rank: 10, name: "Arjun Kapoor", title: "Narrative Navigator", minutes: 440, streak: 7, change: 4, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
// ];

// const maxMinutes = 720;


// export default function ReadometerPage() {
//   return (
//     <main className="min-h-screen bg-[#080705]">


//       {/*Leaderboard Header */}
//       <section
//         className="pt-10  px-6 flex justify-center"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(222, 146, 92, 0.18) 0%, rgba(8, 7, 5, 1) 60%, rgba(8, 7, 5, 1) 100%)",
//         }}
//       >       <div className="w-full max-w-6xl text-center">

//           {/* HEADER */}
//           <div className="flex flex-col items-center">

//             {/* Subtitle */}
//             <div className="mb-4 mt-4">
//               <span
//                 className="text-[#f97316] text-[13px] font-bold tracking-[0.4em] uppercase leading-[1.2] flex flex-col items-center"
//                 style={{ fontFamily: "'Outfit'" }}
//               >
//                 <span>READOMETER LEADERBOARD</span>
//               </span>
//             </div>

//             {/* Title */}
//             <div className="mb-6 max-w-5xl">
//               <h1
//                 className={`${playfair.className} text-[#f0f0f0] text-[3rem] md:text-[3rem] leading-[1.1]`}
//                 style={{ fontWeight: 800, fontFamily: "'Playfair Display'" }}
//               >
//                 India's Top Young Readers
//               </h1>
//             </div>

//             {/* Description */}
//             <div className="mb-5 max-w-3xl">
//               <p
//                 className={`${playfair.className} text-[#9ca3af] text-[17px] md:text-[19px] italic opacity-80`}
//                 style={{ fontFamily: "'Outfit'" }}

//               >
//                 Ranked by minutes read. Verified by parents. Celebrated by all.
//               </p>
//             </div>

//             {/* Reward Badge */}
//             <div className="mb-7">
//               <div
//                 className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-[#f97316]/30"
//                 style={{
//                   background:
//                     "linear-gradient(175deg, rgba(245, 166, 35, 0.18) 0%, rgba(232, 120, 42, 0.12) 100%)",
//                 }}
//               >
//                 {/* Logo Box */}
//                 <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center p-1"></div>

//                 {/* Text */}
//                 <p
//                   className="text-[#f97316] text-[14px]"
//                   style={{ fontFamily: "Outfit", fontWeight: 600 }}
//                 >
//                   Top 3 in each group win Crossword Bookstore Coupons every week!
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* CONTROLS OUTSIDE */}
//       <div className="bg-[#0f0f0f] px-  6 py-3.5 rounded-xl flex items-center justify-between gap-4 flex-wrap">

//         {/* Category Tabs */}
//         <div className="flex gap-2 flex-wrap mx-auto">
//           <CategoryTab label="Pre-Primary" icon="🐣" />
//           <CategoryTab label="Primary" icon="📖" />
//           <CategoryTab label="Secondary I" icon="🎒" active />
//           <CategoryTab label="Secondary II" icon="🎓" />
//         </div>

//         {/* Time Filters */}
//         <div className="flex bg-[#2C2620] rounded-full p-1 border border-white/[0.06] mx-auto">
//           <button className="px-5 py-1.5 rounded-full bg-[#f97316] text-white text-[0.8rem] font-bold">
//             Weekly
//           </button>
//           <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold hover:text-white">
//             Monthly
//           </button>
//           <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold hover:text-white">
//             All Time
//           </button>
//         </div>

//       </div>


//       <div className="bg-[#0f0f0f]  rounded-xl flex items-center justify-between gap-4 flex-wrap border-b border-white/10"></div>


//       {/* Sub-Header Section */}
//       <section style={{ background: "#0f0f0f", minHeight: "100vh", padding: "48px 40px 16px 40px", fontFamily: "sans-serif", position: "relative" }}>

//         {/* Header */}
//         <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>

//           {/* Book mascot */}

//           {/* Label */}
//           <p style={{ color: "#f97316", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", margin: "0 0 8px 0", textTransform: "uppercase", fontFamily: "'Outfit'", lineHeight: "100%" }}>
//             Readometer
//           </p>

//           {/* Title */}
//           <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800, margin: "0 0 10px 0", lineHeight: 1.2, fontFamily: "'Playfair Display'" }}>
//             Top Readers — Secondary I (Ages 6–10)
//           </h1>

//           {/* Subtitle */}
//           <p style={{ color: "#9B8F85", fontSize: "15px", margin: "0 0 8px 0", fontFamily: "'Outfit'", fontWeight: 400 }}>
//             Children who read the most minutes this week, verified by parents.
//           </p>

//           {/* Badge */}
//           <div style={{ display: "inline-block", border: "1px solid #E8782A40", borderRadius: "999px", padding: "6px 16px", color: "#f97316", fontSize: "12px", marginBottom: "32px", backgroundColor: "#E8782A1A", fontFamily: "'Outfit'", fontWeight: 600, lineHeight: "100%" }}>
//             Top 3 readers receive Crossword Bookstore coupons every Monday
//           </div>

//           {/* Podium Card */}
//           <div style={{
//             background: "linear-gradient(135deg, #1A1612 0%, #000000 50%, #241e18ff 100%)",
//             borderRadius: "20px",
//             padding: "48px 32px 32px",
//             border: "1px solid #2a2a2a"
//           }}>

//             {/* Podium Row */}
//             {/* Podium Row */}
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "26px" }}>

//               {/* 2nd Place */}
//               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                 {/* Medal above avatar */}
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
//                   alt="silver medal"
//                   style={{ width: "19px", height: "26px", marginBottom: "6px", objectFit: "contain" }}
//                 />
//                 <div style={{
//                   width: "67px", height: "68px", borderRadius: "50%",
//                   border: "3px solid #f97316", overflow: "hidden", marginBottom: "14px"
//                 }}>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
//                     alt="Meera Joshi"
//                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                   />
//                 </div>

//                 <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Meera Joshi</p>

//                 <p style={{ color: "#5C5248", fontWeight: 400, fontSize: "12px", margin: "0 0 10px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Bal Bharati, Mumbai</p>

//                 <p style={{ color: "#F0EAE2", lineHeight: "26px", fontSize: "26px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>980 min</p>

//                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 14px 0", fontWeight: 400, fontFamily: "'Outfit'" }}>this week</p>

//                 <div style={{
//                   background: "#F585232E", borderRadius: "999px", padding: "6px 18px",
//                   color: "#F58523", fontSize: "12px", fontWeight: 600,
//                   border: "1px solid #E8782A4D", marginBottom: "16px",
//                   fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
//                 }}>
//                   {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "14px", height: "14px" }} /> */}
//                   🎁 Coupon Winner
//                 </div>
//                 <div style={{
//                   background: "linear-gradient(180deg, #A8B8C833 0%, #A8B8C80D 100%)",
//                   borderRadius: "12px 12px 0 0", width: "120px", height: "60px", padding: "15px 0", textAlign: "center"
//                 }}>
//                   <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#2</span>
//                 </div>
//               </div>

//               {/* 1st Place */}
//               <div style={{ display: "flex", marginTop: "15px", flexDirection: "column", alignItems: "center", transform: "translateY(-32px)" }}>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
//                   alt="gold medal"
//                   style={{ width: "27px", height: "39px", marginBottom: "6px", objectFit: "contain" }}
//                 />
//                 <div style={{
//                   width: "84px", height: "85px", borderRadius: "50%",
//                   border: "3px solid #f97316", overflow: "hidden", marginBottom: "14px",
//                   boxShadow: "0 0 24px rgba(249,115,22,0.4)"
//                 }}>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
//                     alt="Aarav Mehta"
//                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                   />
//                 </div>

//                 <p style={{ color: "#F0EAE2", fontStyle: "bold", fontSize: "17px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Aarav Mehta</p>

//                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 10px 0", fontWeight: "400", textAlign: "center", fontFamily: "'Outfit'" }}>Delhi Public School, Delhi</p>

//                 <p style={{ color: "#E8782A", lineHeight: "32px", fontSize: "32px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>1,240 min</p>

//                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 14px 0", fontFamily: "'Outfit'", fontWeight: "400" }}>this week</p>

//                 <div style={{
//                   background: "#F585232E", borderRadius: "999px", padding: "6px 18px",
//                   color: "#F58523", fontSize: "12px", fontWeight: 600,
//                   border: "1px solid #E8782A4D", marginBottom: "16px",
//                   fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
//                 }}>
//                   {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "12px", height: "13px" }} /> */}
//                   🎁 Crossword Coupon Winner
//                 </div>

//                 <div style={{
//                   background: "linear-gradient(180deg, #E8782A40 0%, #E8782A14 100%)",
//                   borderRadius: "12px 12px 0 0", width: "140px", height: "90px", padding: "22px 0", textAlign: "center"
//                 }}>
//                   <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#1</span>
//                 </div>
//               </div>

//               {/* 3rd Place */}
//               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
//                   alt="bronze medal"
//                   style={{ width: "15px", height: "19px", marginBottom: "6px", objectFit: "contain" }}
//                 />
//                 <div style={{
//                   width: "54px", height: "54px", borderRadius: "50%",
//                   border: "3px solid #f97316", overflow: "hidden", marginBottom: "14px"
//                 }}>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
//                     alt="Rohan Sharma"
//                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                   />
//                 </div>

//                 <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Rohan Sharma</p>

//                 <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 10px 0", textAlign: "center", fontFamily: "'Outfit'" }}>St. Xavier's, Pune</p>

//                 <p style={{ color: "#ffffff", lineHeight: "26px", fontSize: "26px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>820 min</p>

//                 <p style={{ color: "#5C5248", fontWeight: 400, fontSize: "12px", margin: "0 0 14px 0", fontFamily: "'Outfit'" }}>this week</p>

//                 <div style={{
//                   background: "#F585232E", borderRadius: "999px", padding: "6px 18px",
//                   color: "#F58523", fontSize: "12px", fontWeight: 600,
//                   border: "1px solid #E8782A4D", marginBottom: "16px",
//                   fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
//                 }}>
//                   {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "14px", height: "14px" }} /> */}
//                   🎁 Coupon Winner
//                 </div>
//                 <div style={{
//                   background: "linear-gradient(180deg, #afbac533 0%, #c1cedc0d 100%)",
//                   borderRadius: "12px 12px 0 0", width: "120px", height: "40px", padding: "5px 0", textAlign: "center"
//                 }}>
//                   <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#3</span>
//                 </div>
//               </div>

//             </div>

//             {/* Footer note */}
//             <p style={{ color: "#4a453fff", fontSize: "12px", textAlign: "center", margin: "24px 0 0 0", paddingTop: "20px" }}>
//               🎁 Top 3 readers in each age group win exclusive Crossword bookstore coupons — delivered to parent email every Monday.
//             </p>

//           </div>
//         </div>
//       </section>


//       <section style={{
//         background: "#1A1612",
//         width: "900px",
//         height: "484px",
//         margin: "auto",
//         borderRadius: "20px",
//         border: "1px solid #2a2a2a",
//         fontFamily: "'Outfit', sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}>

//         {leaderboardData.map((entry, index) => (
//           <div
//             key={entry.rank}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               padding: "13px 24px",
//               borderBottom: index < leaderboardData.length - 1 ? "1px solid #2C2620" : "none",
//               gap: "16px",
//               height: "69px"
//             }}
//           >

//             {/* Rank */}
//             <div style={{
//               width: "32px",
//               color: "#5C5248",
//               fontSize: "20px",
//               fontWeight: 700,
//               flexShrink: 0,
//               textAlign: "center",
//               fontFamily: "'Outfit'",
//               lineHeight: "100%",
//             }}>
//               #{entry.rank}
//             </div>

//             {/* Avatar */}
//             <div style={{
//               width: "42px",
//               height: "42px",
//               borderRadius: "50%",
//               border: "2px solid #2a2a2a",
//               overflow: "hidden",
//               flexShrink: 0,
//               background: "#1f1f1f",
//             }}>
//               <img
//                 src={entry.avatar}
//                 alt={entry.name}
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>

//             {/* Name + Title */}
//             <div style={{ width: "310px", flexShrink: 0 }}>
//               <p style={{ color: "#F0EAE2", fontSize: "14px", fontWeight: 600, margin: "0 0 5px 0", lineHeight: "100%", fontFamily: "'Outfit'" }}>
//                 {entry.name}
//               </p>
//               <p style={{ color: "#A0511C", fontSize: "12px", fontWeight: 500, margin: 0, lineHeight: "100%", fontFamily: "'Outfit'" }}>
//                 {entry.title}
//               </p>
//             </div>

//             {/* Progress Bar */}
//             <div style={{
//               flex: 1,
//               height: "5px",
//               width: "92px",
//               background: "#2C2620",
//               borderRadius: "999px",
//               overflow: "hidden",
//             }}>
//               <div style={{
//                 height: "100%",
//                 width: `${(entry.minutes / maxMinutes) * 100}%`,
//                 background: "linear-gradient(90deg, #c45e10 0%, #f97316 100%)",
//                 borderRadius: "999px",
//               }} />
//             </div>

//             {/* Minutes */}
//             <div style={{
//               width: "76px",
//               textAlign: "right",
//               color: "#f0eae2",
//               fontSize: "15px",
//               fontWeight: 700,
//               flexShrink: 0,
//               fontFamily: "'Outfit'",
//             }}>
//               {entry.minutes} min
//             </div>

//             {/* Streak */}
//             <div style={{
//               width: "52px",
//               flexShrink: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//               gap: "1px",
//             }}>
//               <span style={{ fontSize: "13px" }}>🔥</span>
//               <span style={{ color: "#E8782A", fontSize: "14px", fontWeight: 700 }}>{entry.streak}</span>
//             </div>

//             {/* Rank Change */}
//             <div style={{
//               width: "40px",
//               flexShrink: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//               gap: "1px",
//             }}>
//               <span style={{ fontSize: "12px", color: entry.change > 0 ? "#22c55e" : "#ef4444" }}>
//                 {entry.change > 0 ? "▲" : "▼"}
//               </span>
//               <span style={{ color: entry.change > 0 ? "#22c55e" : "#ef4444", fontSize: "14px", fontWeight: 700 }}>
//                 {Math.abs(entry.change)}
//               </span>
//             </div>

//           </div>
//         ))}

//       </section>


//       <section style={{
//         background: "#030303ff",
//         padding: "16px",
//         fontFamily: "'Outfit', sans-serif",
//         display: "flex",
//         flexDirection: "column",
//         gap: "12px",
//         width: "940px",
//         marginLeft: "auto",
//         marginRight: "auto",
//         marginTop: "0px",
//         marginBottom: "0px",
//       }}>

//         {/* Row 1 - Rank Banner */}
//         <div style={{
//           background: "#E8782A12",
//           borderRadius: "16px",
//           border: "1px solid #E8782A2B",
//           padding: "20px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: "16px",
//           width: "100%",
//           height: "103px",
//           boxSizing: "border-box",
//         }}>
//           {/* Left - Avatar + Text */}
//           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//             <div style={{
//               width: "60px", height: "61px", borderRadius: "50%",
//               overflow: "hidden", flexShrink: 0, background: "#2a2a2a",
//             }}>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
//                 alt="family"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>
//             <div>
//               <p style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: 600, color: "#f0eae2", lineHeight: "1.4", fontFamily: "'Outfit'" }}>
//                 Your child <span style={{ color: "#E8782A" }}>Kavya</span> is ranked{" "}
//                 <span style={{ color: "#E8782A" }}>#47</span> out of{" "}
//                 <span style={{ color: "#E8782A" }}>1,283 readers</span> in Primary this week.
//               </p>

//               <p style={{ margin: 0, fontSize: "13px", color: "#9B8F85", fontWeight: 400, fontFamily: "'Outfit'" }}>
//                 She read 340 minutes this week. Keep it up — the top 10 is within reach!
//               </p>
//             </div>
//           </div>

//           {/* Right - CTA Button */}
//           <button style={{
//             background: "#E8782A",
//             border: "none",
//             borderRadius: "999px",
//             color: "#ffffff",
//             fontSize: "13px",
//             fontWeight: 600,
//             cursor: "pointer",
//             lineHeight: "100%",
//             flexShrink: 0,
//             fontFamily: "'Outfit'",
//             whiteSpace: "nowrap",
//             width: "171.36px",
//             height: "34px",
//           }}>
//             Log Today's Reading
//           </button>
//         </div>

//         {/* Row 2 - Stats Cards */}
//         <div style={{ display: "flex", gap: "12px", height: "55px" }}>

//           {/* Stat 1 */}
//           <div style={{
//             flex: 1, background: "#1A1612", borderRadius: "14px",
//             border: "1px solid #2C2620", padding: "18px 20px",
//             display: "flex", alignItems: "center", gap: "12px",
//             height: "55px", width: "337.3299865722656px"
//           }}>
//             <span style={{ fontSize: "20px", flexShrink: 0 }}>📚</span>
//             <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
//               4,821 reading sessions logged this week
//             </p>
//           </div>

//           {/* Stat 2 */}
//           {/* <div style={{
//             flex: 1, background: "#1a1a1a", borderRadius: "14px",
//             border: "1px solid #2a2a2a", padding: "18px 20px",
//             display: "flex", alignItems: "center", gap: "12px",
//           }}>
//             <span style={{ fontSize: "24px", flexShrink: 0 }}>🕐</span>
//             <p style={{ margin: 0, color: "#f0eae2", fontSize: "14px", fontWeight: 600 }}>
//               Avg. 38 min/day across all groups
//             </p>
//           </div> */}
//           <div style={{
//             flex: 1, background: "#1A1612", borderRadius: "14px",
//             border: "1px solid #2C2620", padding: "18px 20px",
//             display: "flex", alignItems: "center", gap: "12px",
//             height: "55px", width: "337.3299865722656px"
//           }}>
//             <span style={{ fontSize: "20px", flexShrink: 0 }}>🕐</span>
//             <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
//               Avg. 38 min/day across all groupsek
//             </p>
//           </div>

//           {/* Stat 3 */}
//           {/* <div style={{
//             flex: 1, background: "#1a1a1a", borderRadius: "14px",
//             border: "1px solid #2a2a2a", padding: "18px 20px",
//             display: "flex", alignItems: "center", gap: "12px",
//           }}>
//             <span style={{ fontSize: "24px", flexShrink: 0 }}>🏫</span>
//             <p style={{ margin: 0, color: "#f0eae2", fontSize: "14px", fontWeight: 600 }}>
//               312 schools participating nationwide
//             </p>
//           </div> */}
//           <div style={{
//             flex: 1, background: "#1A1612", borderRadius: "14px",
//             border: "1px solid #2C2620", padding: "18px 20px",
//             display: "flex", alignItems: "center", gap: "12px",
//             height: "55px", width: "337.3299865722656px"
//           }}>
//             <span style={{ fontSize: "20px", flexShrink: 0 }}>🏫</span>
//             <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
//               312 schools participating nationwide
//             </p>
//           </div>

//         </div>

//         {/* Row 3 - Rewards Banner */}
//         <div style={{
//           background: "#1A1612",
//           borderRadius: "16px",
//           border: "1px solid #2a2a2a",
//           borderLeft: "4px solid #E8782A",
//           padding: "24px 28px",
//           display: "flex",
//           alignItems: "center",
//           height: "171px",
//           justifyContent: "space-between",
//           gap: "20px",
//         }}>
//           {/* Left - Gift + Text */}
//           <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
//               alt="gift"
//               style={{ width: "71px", height: "78px", flexShrink: 0, objectFit: "contain" }}
//             />
//             <div>
//               <p style={{ margin: "0 0 8px 0", fontSize: "22px", fontWeight: 800, color: "#F0EAE2", fontFamily: "'Playfair Display'" }}>
//                 Winners get real rewards!
//               </p>
//               <p style={{ margin: 0, fontSize: "14px", color: "#9B8F85", fontWeight: 400, lineHeight: "22.4px", maxWidth: "560px", fontFamily: "'Outfit'" }}>
//                 Top 3 readers in each age group every week receive exclusive Crossword bookstore
//                 coupons — delivered to the parent's registered email every Monday morning. New winners
//                 announced weekly.
//               </p>
//             </div>
//           </div>

//           {/* Right - Outline Button */}
//           <button style={{
//             background: "transparent",
//             border: "2px solid #E8782A",
//             borderRadius: "999px",
//             padding: "10px 28px",
//             color: "#E8782A",
//             fontSize: "14px",
//             fontWeight: 600,
//             cursor: "pointer",
//             flexShrink: 0,
//             fontFamily: "'Outfit'",
//             whiteSpace: "nowrap",
//             height: "44px",
//             width: "180.7px",
//             backgroundColor: "#20160dff",
//           }}>
//             How rewards work
//           </button>
//         </div>

//       </section>


//       <section style={{
//         background: "#131009",
//         marginTop: "31px",
//         padding: "64px 40px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         fontFamily: "'Outfit', sans-serif",
//         gap: "16px",
//         height: "306px",
//         border: "1px solid #2C2620",
//         boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
//       }}>

//         {/* Title */}
//         <h2 style={{
//           color: "#f0eae2",
//           fontSize: "28px",
//           fontWeight: 800,
//           marginTop: "-2px",
//           fontFamily: "'Playfair Display'",
//           lineHeight: "100%",
//         }}>
//           Want to see your child's name here?
//         </h2>

//         {/* Subtitle */}
//         <p style={{
//           color: "#9B8F85",
//           fontSize: "15px",
//           fontWeight: 400,
//           margin: "0",
//           fontFamily: "'Outfit'",
//           lineHeight: "100%",
//         }}>
//           Download UltiMate and start your family's learning journey today.
//         </p>

//         {/* CTA Button */}
//         <button style={{
//           background: "#E8782A",
//           border: "none",
//           height: "47px",
//           width: "198px",
//           borderRadius: "999px",
//           padding: "8px 10px",
//           color: "#ffffff",
//           fontSize: "15px",
//           fontWeight: 700,
//           cursor: "pointer",
//           fontFamily: "'Outfit'",
//           marginTop: "14px",
//         }}>
//           Download UltiMate
//         </button>

//         {/* Disclaimer */}
//         <p style={{
//           color: "#4a453f",
//           fontSize: "12px",
//           fontWeight: 400,
//           margin: "8px 0 0 0",
//           fontFamily: "'Outfit'",
//           lineHeight: "19.2px",
//           letterSpacing: "0%",
//           maxWidth: "520px",

//         }}>
//           All reading minutes are self-reported and parent-verified. Only families who opted in appear publicly.
//           Manage visibility in the UltiMate app under Privacy Settings. Crossword coupons are subject to availability
//           and delivered to registered parent email.
//         </p>

//       </section>


//     </main >
//   );
// }

// function CategoryTab({ label, icon, active }: { label: string; icon: string; active?: boolean }) {
//   return (
//     <button
//       className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-medium transition-colors ${active
//         ? "bg-[#f97316] border border-[#f97316] text-white font-semibold"
//         : "bg-[#2C2620] border border-[#2a2a2a] text-[#9ca3af] hover:text-white"
//         }`}
//     >
//       <span className="text-sm">{icon}</span>
//       {label}
//     </button>
//   );
// }







// "use client";
// import { Playfair_Display } from "next/font/google";
// import { useState, useEffect } from "react";

// const playfair = Playfair_Display({ subsets: ["latin"] });

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
// console.log("API Base URL:", BASE_URL);

// // ── Types ─────────────────────────────────────────────────────────────────
// interface LeaderboardEntry {
//   rank: number;
//   child_id: number;
//   display_name: string;
//   city: string | null;
//   profile_image: string | null;
//   milestone_title: string | null;
//   total_reading_min: number;
//   interesting_count: number;
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

// const PODIUM_ORDER = [1, 0, 2]; // renders as: 2nd, 1st, 3rd

// const FALLBACK_AVATAR = "https://cdn-icons-png.flaticon.com/512/6997/6997662.png";

// // ── Helpers ───────────────────────────────────────────────────────────────
// const getAvatar = (entry: LeaderboardEntry) =>
//   entry.profile_image || FALLBACK_AVATAR;

// // ── Skeleton ──────────────────────────────────────────────────────────────
// const Skeleton = ({ w, h, r = 8 }: { w: string; h: string; r?: number }) => (
//   <div
//     style={{
//       width: w,
//       height: h,
//       borderRadius: r,
//       background:
//         "linear-gradient(90deg, #1f1c18 25%, #2a2520 50%, #1f1c18 75%)",
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
// }: {
//   label: string;
//   icon: string;
//   active?: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: 6,
//         padding: "8px 16px",
//         borderRadius: "999px",
//         fontSize: "0.8rem",
//         fontWeight: active ? 600 : 500,
//         cursor: "pointer",
//         transition: "all 0.2s",
//         fontFamily: "'Outfit'",
//         border: `1px solid ${active ? "#f97316" : "#2a2a2a"}`,
//         background: active ? "#f97316" : "#2C2620",
//         color: active ? "#fff" : "#9ca3af",
//       }}>
//       <span style={{ fontSize: "0.875rem" }}>{icon}</span>
//       {label}
//     </button>
//   );
// }

// // ── Podium Card ───────────────────────────────────────────────────────────
// const PODIUM_CONFIG = [
//   // position 0 = 2nd place slot
//   {
//     avatarSize: 67,
//     podiumH: 60,
//     fontSize: 26,
//     transform: "translateY(0)",
//     medalW: 19,
//     medalH: 26,
//     medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583434.png",
//     podiumBg: "linear-gradient(180deg, #A8B8C833 0%, #A8B8C80D 100%)",
//     isFirst: false,
//   },
//   // position 1 = 1st place slot
//   {
//     avatarSize: 84,
//     podiumH: 90,
//     fontSize: 32,
//     transform: "translateY(-32px)",
//     medalW: 27,
//     medalH: 39,
//     medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//     podiumBg: "linear-gradient(180deg, #E8782A40 0%, #E8782A14 100%)",
//     isFirst: true,
//   },
//   // position 2 = 3rd place slot
//   {
//     avatarSize: 54,
//     podiumH: 40,
//     fontSize: 26,
//     transform: "translateY(0)",
//     medalW: 15,
//     medalH: 19,
//     medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//     podiumBg: "linear-gradient(180deg, #afbac533 0%, #c1cedc0d 100%)",
//     isFirst: false,
//   },
// ];

// function PodiumCard({
//   entry,
//   position,
// }: {
//   entry: LeaderboardEntry;
//   position: number;
// }) {
//   const cfg = PODIUM_CONFIG[position];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         transform: cfg.transform,
//         marginTop: cfg.isFirst ? 15 : 0,
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
//           border: "3px solid #f97316",
//           overflow: "hidden",
//           marginBottom: 14,
//           boxShadow: cfg.isFirst ? "0 0 24px rgba(249,115,22,0.4)" : "none",
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
//           color: cfg.isFirst ? "#E8782A" : "#ffffff",
//           fontSize: cfg.isFirst ? 17 : 15,
//           fontWeight: 700,
//           margin: "0 0 2px 0",
//           textAlign: "center",
//           fontFamily: "'Outfit'",
//         }}>
//         {entry.display_name}
//       </p>

//       {/* City */}
//       {entry.city && (
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

//       {/* Minutes */}
//       <p
//         style={{
//           color: cfg.isFirst ? "#E8782A" : "#F0EAE2",
//           fontSize: cfg.fontSize,
//           fontWeight: 800,
//           lineHeight: `${cfg.fontSize + 4}px`,
//           margin: "0 0 2px 0",
//           fontFamily: "'Outfit'",
//         }}>
//         {entry.total_reading_min.toLocaleString()} min
//       </p>

//       <p
//         style={{
//           color: "#5C5248",
//           fontSize: 12,
//           margin: "0 0 14px 0",
//           fontFamily: "'Outfit'",
//           fontWeight: 400,
//         }}>
//         this{" "}
//         {TIME_PERIODS.find((p) => p.value === "weekly")?.label?.toLowerCase()}
//       </p>

//       {/* Coupon badge — top 3 always win */}
//       <div
//         style={{
//           background: "#F585232E",
//           borderRadius: "999px",
//           padding: "6px 18px",
//           color: "#F58523",
//           fontSize: 12,
//           fontWeight: 600,
//           border: "1px solid #E8782A4D",
//           marginBottom: 16,
//           fontFamily: "'Outfit'",
//           display: "flex",
//           alignItems: "center",
//           gap: 6,
//         }}>
//         🎁 {cfg.isFirst ? "Crossword Coupon Winner" : "Coupon Winner"}
//       </div>

//       {/* Podium block */}
//       <div
//         style={{
//           background: cfg.podiumBg,
//           borderRadius: "12px 12px 0 0",
//           width: cfg.isFirst ? 140 : 120,
//           height: cfg.podiumH,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}>
//         <span
//           style={{
//             color: "#FFFFFF66",
//             fontSize: 24,
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
//   maxMinutes,
// }: {
//   entry: LeaderboardEntry;
//   isLast: boolean;
//   maxMinutes: number;
// }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         padding: "13px 24px",
//         borderBottom: !isLast ? "1px solid #2C2620" : "none",
//         gap: 16,
//         height: 69,
//       }}>
//       {/* Rank */}
//       <div
//         style={{
//           width: 32,
//           color: "#5C5248",
//           fontSize: 20,
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
//           width: 42,
//           height: 42,
//           borderRadius: "50%",
//           border: "2px solid #2a2a2a",
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

//       {/* Name + milestone title */}
//       <div style={{ width: 310, flexShrink: 0 }}>
//         <p
//           style={{
//             color: "#F0EAE2",
//             fontSize: 14,
//             fontWeight: 600,
//             margin: "0 0 5px 0",
//             lineHeight: "100%",
//             fontFamily: "'Outfit'",
//           }}>
//           {entry.display_name}
//         </p>
//         <p
//           style={{
//             color: "#A0511C",
//             fontSize: 12,
//             fontWeight: 500,
//             margin: 0,
//             lineHeight: "100%",
//             fontFamily: "'Outfit'",
//           }}>
//           {entry.milestone_title || "—"}
//         </p>
//       </div>

//       {/* Progress bar */}
//       <div
//         style={{
//           flex: 1,
//           height: 5,
//           background: "#2C2620",
//           borderRadius: "999px",
//           overflow: "hidden",
//         }}>
//         <div
//           style={{
//             height: "100%",
//             width: `${(entry.total_reading_min / maxMinutes) * 100}%`,
//             background: "linear-gradient(90deg, #c45e10 0%, #f97316 100%)",
//             borderRadius: "999px",
//           }}
//         />
//       </div>

//       {/* Minutes */}
//       <div
//         style={{
//           width: 76,
//           textAlign: "right",
//           color: "#f0eae2",
//           fontSize: 15,
//           fontWeight: 700,
//           flexShrink: 0,
//           fontFamily: "'Outfit'",
//         }}>
//         {entry.total_reading_min} min
//       </div>

//       {/* Interesting reads count (streak equivalent) */}
//       <div
//         style={{
//           width: 52,
//           flexShrink: 0,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-end",
//           gap: 1,
//         }}>
//         <span style={{ fontSize: 13 }}>📚</span>
//         <span style={{ color: "#E8782A", fontSize: 14, fontWeight: 700 }}>
//           {entry.interesting_count}
//         </span>
//       </div>
//     </div>
//   );
// }

// // ── Main Component ────────────────────────────────────────────────────────
// export default function ReadometerPage() {
//   const [activeCategory, setActiveCategory] = useState(3);
//   const [activePeriod, setActivePeriod] = useState("weekly");
//   const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // const fetchLeaderboard = async (categoryId: number, period: string) => {
//   //   setLoading(true);
//   //   setError(null);
//   //   try {
//   //     const res = await fetch(
//   //       `${BASE_URL}/readometer/leaderboard?age_category_id=${categoryId}&time_period=${period}`
//   //     );
//   //     if (!res.ok) throw new Error("Failed to fetch leaderboard");
//   //     const json = await res.json();
//   //     if (json.code === 200) {
//   //       setLeaderboard(json.data);
//   //     } else {
//   //       throw new Error(json.message || "Something went wrong");
//   //     }
//   //   } catch (err: any) {
//   //     console.error("Error fetching leaderboard:", err);
//   //     setError(err.message || "Failed to load leaderboard");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const fetchLeaderboard = async (categoryId: number, period: string) => {
//   setLoading(true);
//   setError(null);
//   try {
//     // ← call /api/leaderboard (your own Next.js route) not the backend directly
//     const res = await fetch(
//       `/readometer/api/?age_category_id=${categoryId}&time_period=${period}`
//     );
//     if (!res.ok) throw new Error("Failed to fetch leaderboard");
//     const json = await res.json();
//     if (json.code === 200) {
//       setLeaderboard(json.data);
//     } else {
//       throw new Error(json.message || "Something went wrong");
//     }
//   } catch (err: any) {
//     console.error("Error fetching leaderboard:", err);
//     setError(err.message || "Failed to load leaderboard");
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     fetchLeaderboard(activeCategory, activePeriod);
//   }, [activeCategory, activePeriod]);

//   const activeCategoryLabel =
//     AGE_CATEGORIES.find((c) => c.id === activeCategory)?.label || "";

//   // top 3 for podium, rest for list
//   const top3 = leaderboard.slice(0, 3);
//   const rest = leaderboard.slice(3);
//   const maxMinutes = Math.max(...rest.map((e) => e.total_reading_min), 1);

//   // Podium display order: 2nd (index 1), 1st (index 0), 3rd (index 2)
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
//           paddingTop: 40,
//           paddingLeft: 24,
//           paddingRight: 24,
//           display: "flex",
//           justifyContent: "center",
//           background:
//             "radial-gradient(circle at center, rgba(222,146,92,0.18) 0%, rgba(8,7,5,1) 60%)",
//         }}>
//         <div style={{ width: "100%", maxWidth: 900, textAlign: "center" }}>
//           <div style={{ marginBottom: 16, marginTop: 16 }}>
//             <span
//               style={{
//                 color: "#f97316",
//                 fontSize: 13,
//                 fontWeight: 700,
//                 letterSpacing: "0.4em",
//                 textTransform: "uppercase",
//                 fontFamily: "'Outfit'",
//               }}>
//               READOMETER LEADERBOARD
//             </span>
//           </div>

//           <h1
//             className={playfair.className}
//             style={{
//               color: "#f0f0f0",
//               fontSize: "3rem",
//               lineHeight: 1.1,
//               fontWeight: 800,
//               marginBottom: 24,
//             }}>
//             India's Top Young Readers
//           </h1>

//           <p
//             className={playfair.className}
//             style={{
//               color: "#9ca3af",
//               fontSize: 17,
//               fontStyle: "italic",
//               opacity: 0.8,
//               marginBottom: 20,
//             }}>
//             Ranked by minutes read. Verified by parents. Celebrated by all.
//           </p>

//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 12,
//               padding: "6px 20px",
//               borderRadius: "999px",
//               border: "1px solid rgba(249,115,22,0.3)",
//               background:
//                 "linear-gradient(175deg, rgba(245,166,35,0.18) 0%, rgba(232,120,42,0.12) 100%)",
//               marginBottom: 28,
//             }}>
//             <p
//               style={{
//                 color: "#f97316",
//                 fontSize: 14,
//                 fontWeight: 600,
//                 margin: 0,
//                 fontFamily: "'Outfit'",
//               }}>
//               🎁 Top 3 in each group win Crossword Bookstore Coupons every week!
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Controls ── */}
//       <div
//         style={{
//           background: "#0f0f0f",
//           padding: "14px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 16,
//           flexWrap: "wrap",
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//         }}>
//         {/* Category tabs */}
//         <div
//           style={{
//             display: "flex",
//             gap: 8,
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
//             />
//           ))}
//         </div>

//         {/* Time period pills */}
//         <div
//           style={{
//             display: "flex",
//             background: "#2C2620",
//             borderRadius: "999px",
//             padding: 4,
//             border: "1px solid rgba(255,255,255,0.06)",
//           }}>
//           {TIME_PERIODS.map((p) => (
//             <button
//               key={p.value}
//               onClick={() => setActivePeriod(p.value)}
//               style={{
//                 padding: "6px 20px",
//                 borderRadius: "999px",
//                 background: activePeriod === p.value ? "#f97316" : "transparent",
//                 color: activePeriod === p.value ? "#fff" : "#9ca3af",
//                 fontSize: "0.8rem",
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
//           padding: "48px 40px 16px",
//           fontFamily: "'Outfit', sans-serif",
//         }}>
//         <div style={{ maxWidth: 900, margin: "0 auto" }}>
//           <p
//             style={{
//               color: "#f97316",
//               fontSize: 13,
//               fontWeight: 700,
//               letterSpacing: "3px",
//               margin: "0 0 8px 0",
//               textTransform: "uppercase",
//               fontFamily: "'Outfit'",
//             }}>
//             Readometer
//           </p>

//           <h1
//             style={{
//               color: "#ffffff",
//               fontSize: 28,
//               fontWeight: 800,
//               margin: "0 0 10px 0",
//               lineHeight: 1.2,
//               fontFamily: "'Playfair Display'",
//             }}>
//             Top Readers — {activeCategoryLabel}
//           </h1>

//           <p
//             style={{
//               color: "#9B8F85",
//               fontSize: 15,
//               margin: "0 0 8px 0",
//               fontFamily: "'Outfit'",
//               fontWeight: 400,
//             }}>
//             Children who read the most minutes this{" "}
//             {activePeriod === "weekly"
//               ? "week"
//               : activePeriod === "monthly"
//               ? "month"
//               : "time"}
//             , verified by parents.
//           </p>

//           <div
//             style={{
//               display: "inline-block",
//               border: "1px solid #E8782A40",
//               borderRadius: "999px",
//               padding: "6px 16px",
//               color: "#f97316",
//               fontSize: 12,
//               marginBottom: 32,
//               backgroundColor: "#E8782A1A",
//               fontFamily: "'Outfit'",
//               fontWeight: 600,
//             }}>
//             Top 3 readers receive Crossword Bookstore coupons every Monday
//           </div>

//           {/* Podium card */}
//           <div
//             style={{
//               background:
//                 "linear-gradient(135deg, #1A1612 0%, #000000 50%, #241e18ff 100%)",
//               borderRadius: 20,
//               padding: "48px 32px 32px",
//               border: "1px solid #2a2a2a",
//             }}>
//             {loading ? (
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-end",
//                   justifyContent: "center",
//                   gap: 26,
//                   minHeight: 280,
//                 }}>
//                 {[80, 120, 60].map((h, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       gap: 8,
//                     }}>
//                     <Skeleton w="80px" h="80px" r={999} />
//                     <Skeleton w="80px" h="14px" />
//                     <Skeleton w="60px" h="12px" />
//                     <div
//                       style={{
//                         height: h,
//                         width: 120,
//                         background: "#1f1c18",
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
//                   gap: 26,
//                 }}>
//                 {podiumEntries.map((entry, idx) => (
//                   <PodiumCard key={entry.rank} entry={entry} position={idx} />
//                 ))}
//               </div>
//             )}

//             <p
//               style={{
//                 color: "#4a453fff",
//                 fontSize: 12,
//                 textAlign: "center",
//                 margin: "24px 0 0 0",
//                 paddingTop: 20,
//               }}>
//               🎁 Top 3 readers in each age group win exclusive Crossword bookstore coupons —
//               delivered to parent email every Monday morning. New winners announced weekly.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Rest of leaderboard (ranks 4–10) ── */}
//       {!loading && !error && rest.length > 0 && (
//         <div style={{ maxWidth: 900, margin: "24px auto 0" }}>
//           <div
//             style={{
//               background: "#1A1612",
//               borderRadius: 20,
//               border: "1px solid #2a2a2a",
//               overflow: "hidden",
//             }}>
//             {rest.map((entry, index) => (
//               <LeaderboardRow
//                 key={entry.child_id}
//                 entry={entry}
//                 isLast={index === rest.length - 1}
//                 maxMinutes={maxMinutes}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ── Rewards Banner ── */}
//       <div style={{ maxWidth: 940, margin: "24px auto 0", padding: "0 16px" }}>
//         <div
//           style={{
//             background: "#1A1612",
//             borderRadius: 16,
//             border: "1px solid #2a2a2a",
//             borderLeft: "4px solid #E8782A",
//             padding: "24px 28px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 20,
//           }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
//               alt="gift"
//               style={{
//                 width: 71,
//                 height: 78,
//                 flexShrink: 0,
//                 objectFit: "contain",
//               }}
//             />
//             <div>
//               <p
//                 style={{
//                   margin: "0 0 8px 0",
//                   fontSize: 22,
//                   fontWeight: 800,
//                   color: "#F0EAE2",
//                   fontFamily: "'Playfair Display'",
//                 }}>
//                 Winners get real rewards!
//               </p>
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 14,
//                   color: "#9B8F85",
//                   fontWeight: 400,
//                   lineHeight: "22.4px",
//                   maxWidth: 560,
//                   fontFamily: "'Outfit'",
//                 }}>
//                 Top 3 readers in each age group every week receive exclusive
//                 Crossword bookstore coupons — delivered to the parent's
//                 registered email every Monday morning.
//               </p>
//             </div>
//           </div>
//           <button
//             style={{
//               background: "#20160dff",
//               border: "2px solid #E8782A",
//               borderRadius: "999px",
//               padding: "10px 28px",
//               color: "#E8782A",
//               fontSize: 14,
//               fontWeight: 600,
//               cursor: "pointer",
//               flexShrink: 0,
//               fontFamily: "'Outfit'",
//               whiteSpace: "nowrap",
//               height: 44,
//             }}>
//             How rewards work
//           </button>
//         </div>
//       </div>

//       {/* ── CTA Footer ── */}
//       <section
//         style={{
//           background: "#131009",
//           marginTop: 31,
//           padding: "64px 40px",
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
//             fontSize: 28,
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
//             fontSize: 15,
//             fontWeight: 400,
//             margin: 0,
//             fontFamily: "'Outfit'",
//           }}>
//           Download UltiMate and start your family's learning journey today.
//         </p>
//         <button
//           style={{
//             background: "#E8782A",
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
//             color: "#4a453f",
//             fontSize: 12,
//             fontWeight: 400,
//             margin: "8px 0 0 0",
//             fontFamily: "'Outfit'",
//             lineHeight: "19.2px",
//             maxWidth: 520,
//           }}>
//           All reading minutes are self-reported and parent-verified. Only
//           families who opted in appear publicly. Manage visibility in the
//           UltiMate app under Privacy Settings. Crossword coupons are subject to
//           availability and delivered to registered parent email.
//         </p>
//       </section>
//     </main>
//   );
// }


"use client";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

// ── Types ─────────────────────────────────────────────────────────────────
interface LeaderboardEntry {
  rank: number;
  child_id: number;
  display_name: string;
  city: string | null;
  profile_image: string | null;
  milestone_title: string | null;
  total_reading_min: number;
  interesting_count: number;
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
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
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
      background: "linear-gradient(90deg, #1f1c18 25%, #2a2520 50%, #1f1c18 75%)",
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
        border: `1px solid ${active ? "#f97316" : "#2a2a2a"}`,
        background: active ? "#f97316" : "#2C2620",
        color: active ? "#fff" : "#9ca3af",
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
    podiumBg: "linear-gradient(180deg, #A8B8C833 0%, #A8B8C80D 100%)",
    isFirst: false,
  },
  {
    avatarSize: isMobile ? 62 : 84,
    podiumH: isMobile ? 66 : 90,
    fontSize: isMobile ? 22 : 32,
    transform: isMobile ? "translateY(-20px)" : "translateY(-32px)",
    medalW: isMobile ? 20 : 27,
    medalH: isMobile ? 28 : 39,
    medalSrc: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
    podiumBg: "linear-gradient(180deg, #E8782A40 0%, #E8782A14 100%)",
    isFirst: true,
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
      <img
        src={cfg.medalSrc}
        alt="medal"
        style={{ width: cfg.medalW, height: cfg.medalH, marginBottom: 6, objectFit: "contain" }}
      />

      <div
        style={{
          width: cfg.avatarSize,
          height: cfg.avatarSize,
          borderRadius: "50%",
          border: "3px solid #f97316",
          overflow: "hidden",
          marginBottom: isMobile ? 8 : 14,
          boxShadow: cfg.isFirst ? "0 0 24px rgba(249,115,22,0.4)" : "none",
        }}>
        <img
          src={getAvatar(entry)}
          alt={entry.display_name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <p
        style={{
          color: cfg.isFirst ? "#E8782A" : "#ffffff",
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
          color: cfg.isFirst ? "#E8782A" : "#F0EAE2",
          fontSize: cfg.fontSize,
          fontWeight: 800,
          lineHeight: `${cfg.fontSize + 4}px`,
          margin: isMobile ? "4px 0 2px 0" : "0 0 2px 0",
          fontFamily: "'Outfit'",
        }}>
        {entry.total_reading_min.toLocaleString()} min
      </p>

      <p
        style={{
          color: "#5C5248",
          fontSize: isMobile ? 10 : 12,
          margin: isMobile ? "0 0 8px 0" : "0 0 14px 0",
          fontFamily: "'Outfit'",
          fontWeight: 400,
        }}>
        this {activePeriod === "weekly" ? "week" : activePeriod === "monthly" ? "month" : "time"}
      </p>

      {!isMobile && (
        <div
          style={{
            background: "#F585232E",
            borderRadius: "999px",
            padding: "6px 18px",
            color: "#F58523",
            fontSize: 12,
            fontWeight: 600,
            border: "1px solid #E8782A4D",
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
  maxMinutes,
  isMobile,
}: {
  entry: LeaderboardEntry;
  isLast: boolean;
  maxMinutes: number;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "10px 14px" : "13px 24px",
        borderBottom: !isLast ? "1px solid #2C2620" : "none",
        gap: isMobile ? 10 : 16,
        minHeight: isMobile ? 60 : 69,
      }}>
      {/* Rank */}
      <div
        style={{
          width: isMobile ? 24 : 32,
          color: "#5C5248",
          fontSize: isMobile ? 14 : 20,
          fontWeight: 700,
          flexShrink: 0,
          textAlign: "center",
          fontFamily: "'Outfit'",
        }}>
        #{entry.rank}
      </div>

      {/* Avatar */}
      <div
        style={{
          width: isMobile ? 34 : 42,
          height: isMobile ? 34 : 42,
          borderRadius: "50%",
          border: "2px solid #2a2a2a",
          overflow: "hidden",
          flexShrink: 0,
          background: "#1f1f1f",
        }}>
        <img
          src={getAvatar(entry)}
          alt={entry.display_name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Name + milestone */}
      <div style={{
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
            color: "#A0511C",
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

      {/* Progress bar — hidden on mobile */}
      {!isMobile && (
        <div
          style={{
            flex: 1,
            height: 5,
            background: "#2C2620",
            borderRadius: "999px",
            overflow: "hidden",
          }}>
          <div
            style={{
              height: "100%",
              width: `${(entry.total_reading_min / maxMinutes) * 100}%`,
              background: "linear-gradient(90deg, #c45e10 0%, #f97316 100%)",
              borderRadius: "999px",
            }}
          />
        </div>
      )}

      {/* Minutes */}
      <div
        style={{
          width: isMobile ? "auto" : 76,
          textAlign: "right",
          color: "#f0eae2",
          fontSize: isMobile ? 12 : 15,
          fontWeight: 700,
          flexShrink: 0,
          fontFamily: "'Outfit'",
        }}>
        {entry.total_reading_min} min
      </div>

      {/* Interesting count — hidden on mobile */}
      {!isMobile && (
        <div
          style={{
            width: 52,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 1,
          }}>
          <span style={{ fontSize: 13 }}>📚</span>
          <span style={{ color: "#E8782A", fontSize: 14, fontWeight: 700 }}>
            {entry.interesting_count}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function ReadometerPage() {
  const [activeCategory, setActiveCategory] = useState(3);
  const [activePeriod, setActivePeriod] = useState("weekly");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowSize();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const fetchLeaderboard = async (categoryId: number, period: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/readometer/api/?age_category_id=${categoryId}&time_period=${period}`
      );
      if (!res.ok) throw new Error("Failed to fetch leaderboard");
      const json = await res.json();
      if (json.code === 200) {
        setLeaderboard(json.data);
      } else {
        throw new Error(json.message || "Something went wrong");
      }
    } catch (err: any) {
      console.error("Error fetching leaderboard:", err);
      setError(err.message || "Failed to load leaderboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(activeCategory, activePeriod);
  }, [activeCategory, activePeriod]);

  const activeCategoryLabel = AGE_CATEGORIES.find((c) => c.id === activeCategory)?.label || "";
  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);
  const maxMinutes = Math.max(...rest.map((e) => e.total_reading_min), 1);
  const podiumEntries = PODIUM_ORDER.map((i) => top3[i]).filter(Boolean);

  const contentMaxWidth = isTablet ? "95%" : 900;
  const sectionPadding = isMobile ? "32px 16px 16px" : "48px 40px 16px";
  const outerPadding = isMobile ? "0 12px" : "0 16px";

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
            "radial-gradient(circle at center, rgba(222,146,92,0.18) 0%, rgba(8,7,5,1) 60%)",
        }}>
        <div style={{ width: "100%", maxWidth: 900, textAlign: "center" }}>
          <div style={{ marginBottom: 12, marginTop: 12 }}>
            <span
              style={{
                color: "#f97316",
                fontSize: isMobile ? 11 : 13,
                fontWeight: 700,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontFamily: "'Outfit'",
              }}>
              READOMETER LEADERBOARD
            </span>
          </div>

          <h1
            className={playfair.className}
            style={{
              color: "#f0f0f0",
              fontSize: isMobile ? "1.8rem" : "3rem",
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: isMobile ? 14 : 24,
            }}>
            India's Top Young Readers
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
            Ranked by minutes read. Verified by parents. Celebrated by all.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: isMobile ? "5px 14px" : "6px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(249,115,22,0.3)",
              background:
                "linear-gradient(175deg, rgba(245,166,35,0.18) 0%, rgba(232,120,42,0.12) 100%)",
              marginBottom: isMobile ? 20 : 28,
            }}>
            <p
              style={{
                color: "#f97316",
                fontSize: isMobile ? 11 : 14,
                fontWeight: 600,
                margin: 0,
                fontFamily: "'Outfit'",
                textAlign: "center",
              }}>
              🎁 Top 3 in each group win Crossword Bookstore Coupons every week!
            </p>
          </div>
        </div>
      </section>

      {/* ── Controls ── */}
      <div
        style={{
          background: "#0f0f0f",
          padding: isMobile ? "12px 12px" : "14px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 10 : 16,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
        {/* Category tabs */}
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

        {/* Time period pills */}
        <div
          style={{
            display: "flex",
            background: "#2C2620",
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
                background: activePeriod === p.value ? "#f97316" : "transparent",
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
              color: "#f97316",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 8px 0",
              textTransform: "uppercase",
              fontFamily: "'Outfit'",
            }}>
            Readometer
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
            Top Readers — {activeCategoryLabel}
          </h1>

          <p
            style={{
              color: "#9B8F85",
              fontSize: isMobile ? 13 : 15,
              margin: "0 0 8px 0",
              fontFamily: "'Outfit'",
              fontWeight: 400,
            }}>
            Children who read the most minutes this{" "}
            {activePeriod === "weekly" ? "week" : activePeriod === "monthly" ? "month" : "time"},
            verified by parents.
          </p>

          <div
            style={{
              display: "inline-block",
              border: "1px solid #E8782A40",
              borderRadius: "999px",
              padding: "6px 16px",
              color: "#f97316",
              fontSize: isMobile ? 11 : 12,
              marginBottom: isMobile ? 20 : 32,
              backgroundColor: "#E8782A1A",
              fontFamily: "'Outfit'",
              fontWeight: 600,
            }}>
            Top 3 readers receive Crossword Bookstore coupons every Monday
          </div>

          {/* Podium card */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #1A1612 0%, #000000 50%, #241e18ff 100%)",
              borderRadius: 20,
              padding: isMobile ? "32px 16px 24px" : "48px 32px 32px",
              border: "1px solid #2a2a2a",
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
                {[isMobile ? 50 : 80, isMobile ? 80 : 120, isMobile ? 35 : 60].map((h, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <Skeleton w={isMobile ? "50px" : "80px"} h={isMobile ? "50px" : "80px"} r={999} />
                    <Skeleton w={isMobile ? "60px" : "80px"} h="14px" />
                    <Skeleton w={isMobile ? "50px" : "60px"} h="12px" />
                    <div
                      style={{
                        height: h,
                        width: isMobile ? 80 : 120,
                        background: "#1f1c18",
                        borderRadius: "12px 12px 0 0",
                      }}
                    />
                  </div>
                ))}
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
              🎁 Top 3 readers in each age group win exclusive Crossword bookstore coupons —
              delivered to parent email every Monday morning. New winners announced weekly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rest of leaderboard ── */}
      {!loading && !error && rest.length > 0 && (
        <div style={{ maxWidth: contentMaxWidth, margin: "24px auto 0", padding: outerPadding }}>
          <div
            style={{
              background: "#1A1612",
              borderRadius: 20,
              border: "1px solid #2a2a2a",
              overflow: "hidden",
            }}>
            {rest.map((entry, index) => (
              <LeaderboardRow
                key={entry.child_id}
                entry={entry}
                isLast={index === rest.length - 1}
                maxMinutes={maxMinutes}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Rewards Banner ── */}
      {/* <div
        style={{
          maxWidth: contentMaxWidth,
          margin: "24px auto 0",
          padding: outerPadding,
        }}>
        <div
          style={{
            background: "#1A1612",
            borderRadius: 16,
            border: "1px solid #2a2a2a",
            borderLeft: "4px solid #E8782A",
            padding: isMobile ? "16px" : "24px 28px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? 14 : 20,
          }}>
          <div
            style={{
              display: "flex",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? 14 : 24,
            }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
              alt="gift"
              style={{
                width: isMobile ? 48 : 71,
                height: isMobile ? 52 : 78,
                flexShrink: 0,
                objectFit: "contain",
              }}
            />
            <div>
              <p
                style={{
                  margin: "0 0 8px 0",
                  fontSize: isMobile ? 16 : 22,
                  fontWeight: 800,
                  color: "#F0EAE2",
                  fontFamily: "'Playfair Display'",
                }}>
                Winners get real rewards!
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? 12 : 14,
                  color: "#9B8F85",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                  fontFamily: "'Outfit'",
                }}>
                Top 3 readers in each age group every week receive exclusive Crossword bookstore
                coupons — delivered to the parent's registered email every Monday morning.
              </p>
            </div>
          </div>
          <button
            style={{
              background: "#20160dff",
              border: "2px solid #E8782A",
              borderRadius: "999px",
              padding: "10px 28px",
              color: "#E8782A",
              fontSize: isMobile ? 12 : 14,
              fontWeight: 600,
              cursor: "pointer",
              flexShrink: 0,
              fontFamily: "'Outfit'",
              whiteSpace: "nowrap",
              height: 44,
              alignSelf: isMobile ? "flex-start" : "center",
            }}>
            How rewards work
          </button>
        </div>
      </div> */}

      {/* ── CTA Footer ── */}
      <section
        style={{
          background: "#131009",
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
        <h2
          style={{
            color: "#f0eae2",
            fontSize: isMobile ? 20 : 28,
            fontWeight: 800,
            fontFamily: "'Playfair Display'",
            lineHeight: "100%",
            margin: 0,
          }}>
          Want to see your child's name here?
        </h2>
        <p
          style={{
            color: "#9B8F85",
            fontSize: isMobile ? 13 : 15,
            fontWeight: 400,
            margin: 0,
            fontFamily: "'Outfit'",
          }}>
          Download UltiMate and start your family's learning journey today.
        </p>
        <button
          style={{
            background: "#E8782A",
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
            color: "#4a453f",
            fontSize: isMobile ? 11 : 12,
            fontWeight: 400,
            margin: "8px 0 0 0",
            fontFamily: "'Outfit'",
            lineHeight: "19.2px",
            maxWidth: 520,
          }}>
          All reading minutes are self-reported and parent-verified. Only families who opted in
          appear publicly. Manage visibility in the UltiMate app under Privacy Settings. Crossword
          coupons are subject to availability and delivered to registered parent email.
        </p>
      </section>
    </main>
  );
}