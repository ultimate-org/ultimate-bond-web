"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const leaderboardData = [
  { rank: 4, name: "Priya Singh", title: "Chapter Champion", minutes: 450, streak: 22, change: 2, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
  { rank: 5, name: "Vivaan Das", title: "Literary Luminary", minutes: 350, streak: 18, change: -1, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997674.png" },
  { rank: 6, name: "Ananya Rao", title: "Wisdom Weaver", minutes: 510, streak: 15, change: 3, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997650.png" },
  { rank: 7, name: "Kabir Nair", title: "Story Seeker", minutes: 280, streak: 12, change: -2, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
  { rank: 8, name: "Ishita Gupta", title: "Page Turner", minutes: 640, streak: 20, change: 1, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997674.png" },
  { rank: 9, name: "Saanvi Tiwari", title: "Tale Tracker", minutes: 490, streak: 9, change: -3, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997650.png" },
  { rank: 10, name: "Arjun Kapoor", title: "Narrative Navigator", minutes: 440, streak: 7, change: 4, avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png" },
];

const maxMinutes = 720;


export default function ReadometerPage() {
  return (
    <main className="min-h-screen bg-[#080705]">


      {/*Leaderboard Header */}
      <section
        className="pt-10  px-6 flex justify-center"
        style={{
          background:
            "radial-gradient(circle at center, rgba(222, 146, 92, 0.18) 0%, rgba(8, 7, 5, 1) 60%, rgba(8, 7, 5, 1) 100%)",
        }}
      >       <div className="w-full max-w-6xl text-center">

          {/* HEADER */}
          <div className="flex flex-col items-center">

            {/* Subtitle */}
            <div className="mb-4 mt-4">
              <span
                className="text-[#f97316] text-[13px] font-bold tracking-[0.4em] uppercase leading-[1.2] flex flex-col items-center"
                style={{ fontFamily: "'Outfit'" }}
              >
                <span>READOMETER LEADERBOARD</span>
              </span>
            </div>

            {/* Title */}
            <div className="mb-6 max-w-5xl">
              <h1
                className={`${playfair.className} text-[#f0f0f0] text-[3rem] md:text-[3rem] leading-[1.1]`}
                style={{ fontWeight: 800, fontFamily: "'Playfair Display'" }}
              >
                India's Top Young Readers
              </h1>
            </div>

            {/* Description */}
            <div className="mb-5 max-w-3xl">
              <p
                className={`${playfair.className} text-[#9ca3af] text-[17px] md:text-[19px] italic opacity-80`}
                style={{ fontFamily: "'Outfit'" }}

              >
                Ranked by minutes read. Verified by parents. Celebrated by all.
              </p>
            </div>

            {/* Reward Badge */}
            <div className="mb-7">
              <div
                className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-[#f97316]/30"
                style={{
                  background:
                    "linear-gradient(175deg, rgba(245, 166, 35, 0.18) 0%, rgba(232, 120, 42, 0.12) 100%)",
                }}
              >
                {/* Logo Box */}
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center p-1"></div>

                {/* Text */}
                <p
                  className="text-[#f97316] text-[14px]"
                  style={{ fontFamily: "Outfit", fontWeight: 600 }}
                >
                  Top 3 in each group win Crossword Bookstore Coupons every week!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTROLS OUTSIDE */}
      <div className="bg-[#0f0f0f] px-  6 py-3.5 rounded-xl flex items-center justify-between gap-4 flex-wrap">

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap mx-auto">
          <CategoryTab label="Pre-Primary" icon="🐣" />
          <CategoryTab label="Primary" icon="📖" />
          <CategoryTab label="Secondary I" icon="🎒" active />
          <CategoryTab label="Secondary II" icon="🎓" />
        </div>

        {/* Time Filters */}
        <div className="flex bg-[#2C2620] rounded-full p-1 border border-white/[0.06] mx-auto">
          <button className="px-5 py-1.5 rounded-full bg-[#f97316] text-white text-[0.8rem] font-bold">
            Weekly
          </button>
          <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold hover:text-white">
            Monthly
          </button>
          <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold hover:text-white">
            All Time
          </button>
        </div>

      </div>


      <div className="bg-[#0f0f0f]  rounded-xl flex items-center justify-between gap-4 flex-wrap border-b border-white/10"></div>


      {/* Sub-Header Section */}
      <section style={{ background: "#0f0f0f", minHeight: "100vh", padding: "48px 40px 16px 40px", fontFamily: "sans-serif", position: "relative" }}>

        {/* Header */}
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>

          {/* Book mascot */}

          {/* Label */}
          <p style={{ color: "#f97316", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", margin: "0 0 8px 0", textTransform: "uppercase", fontFamily: "'Outfit'", lineHeight: "100%" }}>
            Readometer
          </p>

          {/* Title */}
          <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800, margin: "0 0 10px 0", lineHeight: 1.2, fontFamily: "'Playfair Display'" }}>
            Top Readers — Secondary I (Ages 6–10)
          </h1>

          {/* Subtitle */}
          <p style={{ color: "#9B8F85", fontSize: "15px", margin: "0 0 8px 0", fontFamily: "'Outfit'", fontWeight: 400 }}>
            Children who read the most minutes this week, verified by parents.
          </p>

          {/* Badge */}
          <div style={{ display: "inline-block", border: "1px solid #E8782A40", borderRadius: "999px", padding: "6px 16px", color: "#f97316", fontSize: "12px", marginBottom: "32px", backgroundColor: "#E8782A1A", fontFamily: "'Outfit'", fontWeight: 600, lineHeight: "100%" }}>
            Top 3 readers receive Crossword Bookstore coupons every Monday
          </div>

          {/* Podium Card */}
          <div style={{
            background: "linear-gradient(135deg, #1A1612 0%, #000000 50%, #241e18ff 100%)",
            borderRadius: "20px",
            padding: "48px 32px 32px",
            border: "1px solid #2a2a2a"
          }}>

            {/* Podium Row */}
            {/* Podium Row */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "26px" }}>

              {/* 2nd Place */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Medal above avatar */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
                  alt="silver medal"
                  style={{ width: "19px", height: "26px", marginBottom: "6px", objectFit: "contain" }}
                />
                <div style={{
                  width: "67px", height: "68px", borderRadius: "50%",
                  border: "3px solid #f97316", overflow: "hidden", marginBottom: "14px"
                }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
                    alt="Meera Joshi"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Meera Joshi</p>

                <p style={{ color: "#5C5248", fontWeight: 400, fontSize: "12px", margin: "0 0 10px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Bal Bharati, Mumbai</p>

                <p style={{ color: "#F0EAE2", lineHeight: "26px", fontSize: "26px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>980 min</p>

                <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 14px 0", fontWeight: 400, fontFamily: "'Outfit'" }}>this week</p>

                <div style={{
                  background: "#F585232E", borderRadius: "999px", padding: "6px 18px",
                  color: "#F58523", fontSize: "12px", fontWeight: 600,
                  border: "1px solid #E8782A4D", marginBottom: "16px",
                  fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
                }}>
                  {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "14px", height: "14px" }} /> */}
                  🎁 Coupon Winner
                </div>
                <div style={{
                  background: "linear-gradient(180deg, #A8B8C833 0%, #A8B8C80D 100%)",
                  borderRadius: "12px 12px 0 0", width: "120px", height: "60px", padding: "15px 0", textAlign: "center"
                }}>
                  <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#2</span>
                </div>
              </div>

              {/* 1st Place */}
              <div style={{ display: "flex", marginTop: "15px", flexDirection: "column", alignItems: "center", transform: "translateY(-32px)" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
                  alt="gold medal"
                  style={{ width: "27px", height: "39px", marginBottom: "6px", objectFit: "contain" }}
                />
                <div style={{
                  width: "84px", height: "85px", borderRadius: "50%",
                  border: "3px solid #f97316", overflow: "hidden", marginBottom: "14px",
                  boxShadow: "0 0 24px rgba(249,115,22,0.4)"
                }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
                    alt="Aarav Mehta"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <p style={{ color: "#F0EAE2", fontStyle: "bold", fontSize: "17px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Aarav Mehta</p>

                <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 10px 0", fontWeight: "400", textAlign: "center", fontFamily: "'Outfit'" }}>Delhi Public School, Delhi</p>

                <p style={{ color: "#E8782A", lineHeight: "32px", fontSize: "32px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>1,240 min</p>

                <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 14px 0", fontFamily: "'Outfit'", fontWeight: "400" }}>this week</p>

                <div style={{
                  background: "#F585232E", borderRadius: "999px", padding: "6px 18px",
                  color: "#F58523", fontSize: "12px", fontWeight: 600,
                  border: "1px solid #E8782A4D", marginBottom: "16px",
                  fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
                }}>
                  {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "12px", height: "13px" }} /> */}
                  🎁 Crossword Coupon Winner
                </div>

                <div style={{
                  background: "linear-gradient(180deg, #E8782A40 0%, #E8782A14 100%)",
                  borderRadius: "12px 12px 0 0", width: "140px", height: "90px", padding: "22px 0", textAlign: "center"
                }}>
                  <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#1</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
                  alt="bronze medal"
                  style={{ width: "15px", height: "19px", marginBottom: "6px", objectFit: "contain" }}
                />
                <div style={{
                  width: "54px", height: "54px", borderRadius: "50%",
                  border: "3px solid #f97316", overflow: "hidden", marginBottom: "14px"
                }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6997/6997674.png"
                    alt="Rohan Sharma"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, margin: "0 0 2px 0", textAlign: "center", fontFamily: "'Outfit'" }}>Rohan Sharma</p>

                <p style={{ color: "#5C5248", fontSize: "12px", margin: "0 0 10px 0", textAlign: "center", fontFamily: "'Outfit'" }}>St. Xavier's, Pune</p>

                <p style={{ color: "#ffffff", lineHeight: "26px", fontSize: "26px", fontWeight: 800, margin: "0 0 2px 0", fontFamily: "'Outfit'" }}>820 min</p>

                <p style={{ color: "#5C5248", fontWeight: 400, fontSize: "12px", margin: "0 0 14px 0", fontFamily: "'Outfit'" }}>this week</p>

                <div style={{
                  background: "#F585232E", borderRadius: "999px", padding: "6px 18px",
                  color: "#F58523", fontSize: "12px", fontWeight: 600,
                  border: "1px solid #E8782A4D", marginBottom: "16px",
                  fontFamily: "'Outfit'", display: "flex", alignItems: "center", gap: "6px"
                }}>
                  {/* <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" style={{ width: "14px", height: "14px" }} /> */}
                  🎁 Coupon Winner
                </div>
                <div style={{
                  background: "linear-gradient(180deg, #afbac533 0%, #c1cedc0d 100%)",
                  borderRadius: "12px 12px 0 0", width: "120px", height: "40px", padding: "5px 0", textAlign: "center"
                }}>
                  <span style={{ color: "#FFFFFF66", fontSize: "24px", fontWeight: 800, fontFamily: "'Outfit'" }}>#3</span>
                </div>
              </div>

            </div>

            {/* Footer note */}
            <p style={{ color: "#4a453fff", fontSize: "12px", textAlign: "center", margin: "24px 0 0 0", paddingTop: "20px" }}>
              🎁 Top 3 readers in each age group win exclusive Crossword bookstore coupons — delivered to parent email every Monday.
            </p>

          </div>
        </div>
      </section>


      <section style={{
        background: "#1A1612",
        width: "900px",
        height: "484px",
        margin: "auto",
        borderRadius: "20px",
        border: "1px solid #2a2a2a",
        fontFamily: "'Outfit', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>

        {leaderboardData.map((entry, index) => (
          <div
            key={entry.rank}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "13px 24px",
              borderBottom: index < leaderboardData.length - 1 ? "1px solid #2C2620" : "none",
              gap: "16px",
              height: "69px"
            }}
          >

            {/* Rank */}
            <div style={{
              width: "32px",
              color: "#5C5248",
              fontSize: "20px",
              fontWeight: 700,
              flexShrink: 0,
              textAlign: "center",
              fontFamily: "'Outfit'",
              lineHeight: "100%",
            }}>
              #{entry.rank}
            </div>

            {/* Avatar */}
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: "2px solid #2a2a2a",
              overflow: "hidden",
              flexShrink: 0,
              background: "#1f1f1f",
            }}>
              <img
                src={entry.avatar}
                alt={entry.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Name + Title */}
            <div style={{ width: "310px", flexShrink: 0 }}>
              <p style={{ color: "#F0EAE2", fontSize: "14px", fontWeight: 600, margin: "0 0 5px 0", lineHeight: "100%", fontFamily: "'Outfit'" }}>
                {entry.name}
              </p>
              <p style={{ color: "#A0511C", fontSize: "12px", fontWeight: 500, margin: 0, lineHeight: "100%", fontFamily: "'Outfit'" }}>
                {entry.title}
              </p>
            </div>

            {/* Progress Bar */}
            <div style={{
              flex: 1,
              height: "5px",
              width: "92px",
              background: "#2C2620",
              borderRadius: "999px",
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${(entry.minutes / maxMinutes) * 100}%`,
                background: "linear-gradient(90deg, #c45e10 0%, #f97316 100%)",
                borderRadius: "999px",
              }} />
            </div>

            {/* Minutes */}
            <div style={{
              width: "76px",
              textAlign: "right",
              color: "#f0eae2",
              fontSize: "15px",
              fontWeight: 700,
              flexShrink: 0,
              fontFamily: "'Outfit'",
            }}>
              {entry.minutes} min
            </div>

            {/* Streak */}
            <div style={{
              width: "52px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "1px",
            }}>
              <span style={{ fontSize: "13px" }}>🔥</span>
              <span style={{ color: "#E8782A", fontSize: "14px", fontWeight: 700 }}>{entry.streak}</span>
            </div>

            {/* Rank Change */}
            <div style={{
              width: "40px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "1px",
            }}>
              <span style={{ fontSize: "12px", color: entry.change > 0 ? "#22c55e" : "#ef4444" }}>
                {entry.change > 0 ? "▲" : "▼"}
              </span>
              <span style={{ color: entry.change > 0 ? "#22c55e" : "#ef4444", fontSize: "14px", fontWeight: 700 }}>
                {Math.abs(entry.change)}
              </span>
            </div>

          </div>
        ))}

      </section>


      <section style={{
        background: "#030303ff",
        padding: "16px",
        fontFamily: "'Outfit', sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "940px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0px",
        marginBottom: "0px",
      }}>

        {/* Row 1 - Rank Banner */}
        <div style={{
          background: "#E8782A12",
          borderRadius: "16px",
          border: "1px solid #E8782A2B",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          width: "100%",
          height: "103px",
          boxSizing: "border-box",
        }}>
          {/* Left - Avatar + Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "60px", height: "61px", borderRadius: "50%",
              overflow: "hidden", flexShrink: 0, background: "#2a2a2a",
            }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
                alt="family"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <p style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: 600, color: "#f0eae2", lineHeight: "1.4", fontFamily: "'Outfit'" }}>
                Your child <span style={{ color: "#E8782A" }}>Kavya</span> is ranked{" "}
                <span style={{ color: "#E8782A" }}>#47</span> out of{" "}
                <span style={{ color: "#E8782A" }}>1,283 readers</span> in Primary this week.
              </p>

              <p style={{ margin: 0, fontSize: "13px", color: "#9B8F85", fontWeight: 400, fontFamily: "'Outfit'" }}>
                She read 340 minutes this week. Keep it up — the top 10 is within reach!
              </p>
            </div>
          </div>

          {/* Right - CTA Button */}
          <button style={{
            background: "#E8782A",
            border: "none",
            borderRadius: "999px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            lineHeight: "100%",
            flexShrink: 0,
            fontFamily: "'Outfit'",
            whiteSpace: "nowrap",
            width: "171.36px",
            height: "34px",
          }}>
            Log Today's Reading
          </button>
        </div>

        {/* Row 2 - Stats Cards */}
        <div style={{ display: "flex", gap: "12px", height: "55px" }}>

          {/* Stat 1 */}
          <div style={{
            flex: 1, background: "#1A1612", borderRadius: "14px",
            border: "1px solid #2C2620", padding: "18px 20px",
            display: "flex", alignItems: "center", gap: "12px",
            height: "55px", width: "337.3299865722656px"
          }}>
            <span style={{ fontSize: "20px", flexShrink: 0 }}>📚</span>
            <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
              4,821 reading sessions logged this week
            </p>
          </div>

          {/* Stat 2 */}
          {/* <div style={{
            flex: 1, background: "#1a1a1a", borderRadius: "14px",
            border: "1px solid #2a2a2a", padding: "18px 20px",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ fontSize: "24px", flexShrink: 0 }}>🕐</span>
            <p style={{ margin: 0, color: "#f0eae2", fontSize: "14px", fontWeight: 600 }}>
              Avg. 38 min/day across all groups
            </p>
          </div> */}
          <div style={{
            flex: 1, background: "#1A1612", borderRadius: "14px",
            border: "1px solid #2C2620", padding: "18px 20px",
            display: "flex", alignItems: "center", gap: "12px",
            height: "55px", width: "337.3299865722656px"
          }}>
            <span style={{ fontSize: "20px", flexShrink: 0 }}>🕐</span>
            <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
              Avg. 38 min/day across all groupsek
            </p>
          </div>

          {/* Stat 3 */}
          {/* <div style={{
            flex: 1, background: "#1a1a1a", borderRadius: "14px",
            border: "1px solid #2a2a2a", padding: "18px 20px",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ fontSize: "24px", flexShrink: 0 }}>🏫</span>
            <p style={{ margin: 0, color: "#f0eae2", fontSize: "14px", fontWeight: 600 }}>
              312 schools participating nationwide
            </p>
          </div> */}
          <div style={{
            flex: 1, background: "#1A1612", borderRadius: "14px",
            border: "1px solid #2C2620", padding: "18px 20px",
            display: "flex", alignItems: "center", gap: "12px",
            height: "55px", width: "337.3299865722656px"
          }}>
            <span style={{ fontSize: "20px", flexShrink: 0 }}>🏫</span>
            <p style={{ margin: 0, color: "#9B8F85", fontSize: "11px", fontWeight: 500 }}>
              312 schools participating nationwide
            </p>
          </div>

        </div>

        {/* Row 3 - Rewards Banner */}
        <div style={{
          background: "#1A1612",
          borderRadius: "16px",
          border: "1px solid #2a2a2a",
          borderLeft: "4px solid #E8782A",
          padding: "24px 28px",
          display: "flex",
          alignItems: "center",
          height: "171px",
          justifyContent: "space-between",
          gap: "20px",
        }}>
          {/* Left - Gift + Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
              alt="gift"
              style={{ width: "71px", height: "78px", flexShrink: 0, objectFit: "contain" }}
            />
            <div>
              <p style={{ margin: "0 0 8px 0", fontSize: "22px", fontWeight: 800, color: "#F0EAE2", fontFamily: "'Playfair Display'" }}>
                Winners get real rewards!
              </p>
              <p style={{ margin: 0, fontSize: "14px", color: "#9B8F85", fontWeight: 400, lineHeight: "22.4px", maxWidth: "560px", fontFamily: "'Outfit'" }}>
                Top 3 readers in each age group every week receive exclusive Crossword bookstore
                coupons — delivered to the parent's registered email every Monday morning. New winners
                announced weekly.
              </p>
            </div>
          </div>

          {/* Right - Outline Button */}
          <button style={{
            background: "transparent",
            border: "2px solid #E8782A",
            borderRadius: "999px",
            padding: "10px 28px",
            color: "#E8782A",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            flexShrink: 0,
            fontFamily: "'Outfit'",
            whiteSpace: "nowrap",
            height: "44px",
            width: "180.7px",
            backgroundColor: "#20160dff",
          }}>
            How rewards work
          </button>
        </div>

      </section>


      <section style={{
        background: "#131009",
        marginTop: "31px",
        padding: "64px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Outfit', sans-serif",
        gap: "16px",
        height: "306px",
        border: "1px solid #2C2620",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      }}>

        {/* Title */}
        <h2 style={{
          color: "#f0eae2",
          fontSize: "28px",
          fontWeight: 800,
          marginTop: "-2px",
          fontFamily: "'Playfair Display'",
          lineHeight: "100%",
        }}>
          Want to see your child's name here?
        </h2>

        {/* Subtitle */}
        <p style={{
          color: "#9B8F85",
          fontSize: "15px",
          fontWeight: 400,
          margin: "0",
          fontFamily: "'Outfit'",
          lineHeight: "100%",
        }}>
          Download UltiMate and start your family's learning journey today.
        </p>

        {/* CTA Button */}
        <button style={{
          background: "#E8782A",
          border: "none",
          height: "47px",
          width: "198px",
          borderRadius: "999px",
          padding: "8px 10px",
          color: "#ffffff",
          fontSize: "15px",
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "'Outfit'",
          marginTop: "14px",
        }}>
          Download UltiMate
        </button>

        {/* Disclaimer */}
        <p style={{
          color: "#4a453f",
          fontSize: "12px",
          fontWeight: 400,
          margin: "8px 0 0 0",
          fontFamily: "'Outfit'",
          lineHeight: "19.2px",
          letterSpacing: "0%",
          maxWidth: "520px",

        }}>
          All reading minutes are self-reported and parent-verified. Only families who opted in appear publicly.
          Manage visibility in the UltiMate app under Privacy Settings. Crossword coupons are subject to availability
          and delivered to registered parent email.
        </p>

      </section>


    </main >
  );
}

function CategoryTab({ label, icon, active }: { label: string; icon: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-medium transition-colors ${active
        ? "bg-[#f97316] border border-[#f97316] text-white font-semibold"
        : "bg-[#2C2620] border border-[#2a2a2a] text-[#9ca3af] hover:text-white"
        }`}
    >
      <span className="text-sm">{icon}</span>
      {label}
    </button>
  );
}
