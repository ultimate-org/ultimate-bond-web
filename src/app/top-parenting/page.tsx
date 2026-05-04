"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const topParents = [
  {
    rank: 1,
    name: "Priya Mehta",
    title: "Parent of Aarav · Primary",
    avatar: "/avatars/priya.png",
    milestones: 100,
    streak: "22-day streak",
    tag: "Speed leader",
    medal: "🥇",
    rankColor: "#C8AE1A",
    rankBg: "rgba(200,174,26,0.18)",
    border: "rgba(200,174,26,0.25)",
    progressColor: "#C8AE1A",
  },
  {
    rank: 2,
    name: "Rajesh Joshi",
    title: "Parent of Meera · Primary",
    avatar: "/avatars/rajesh.png",
    milestones: 98,
    streak: "18-day streak",
    tag: "98% verified",
    medal: "🥈",
    rankColor: "#A0A0A0",
    rankBg: "rgba(160,160,160,0.15)",
    border: "rgba(160,160,160,0.2)",
    progressColor: "#C8AE1A",
  },
  {
    rank: 3,
    name: "Neha Sharma",
    title: "Parent of Rohan · Secondary I",
    avatar: "/avatars/neha.png",
    milestones: 95,
    streak: "14-day streak",
    tag: "Top verifier",
    medal: "🥉",
    rankColor: "#CD7F32",
    rankBg: "rgba(205,127,50,0.15)",
    border: "rgba(205,127,50,0.2)",
    progressColor: "#C8AE1A",
  },
];


const leaderboardData = [
  { rank: 1, name: "Priya Singh", title: "Parent of rajesh-primary", minutes: 45, streak: 22, change: 2, },
  { rank: 2, name: "Vivaan Das", title: "Parent of rajesh-primary", minutes: 35, streak: 18, change: -1, },
  { rank: 3, name: "Ananya Rao", title: "Parent of rajesh-primary", minutes: 51, streak: 15, change: 3, },
  { rank: 4, name: "Kabir Nair", title: "Parent of rajesh-primary", minutes: 28, streak: 12, change: -2, },
  { rank: 5, name: "Ishita Gupta", title: "Parent of rajesh-primary", minutes: 64, streak: 20, change: 1, },
  { rank: 6, name: "Saanvi Tiwari", title: "Parent of rajesh-primary", minutes: 49, streak: 9, change: -3, },
  { rank: 7, name: "Arjun Kapoor", title: "Parent of rajesh-primary", minutes: 44, streak: 7, change: 4, },
];

const maxMinutes = 720;


export default function ReadometerPage() {
  return (
    <main className="min-h-screen bg-[#080705]">


      <section
        className="pt-10  px-6 flex justify-center"
        style={{
          background: "radial-gradient(circle at center, rgba(200, 174, 26, 0.22) 0%, #080705 60%, #080705 100%)",
        }}
      >       <div className="w-full max-w-6xl text-center">

          {/* HEADER */}
          <div className="flex flex-col items-center">

            {/* Subtitle */}
            <div className="mb-4 mt-4">
              <span
                className="text-[#F5AB23] text-[13px] font-bold tracking-[0.4em] uppercase leading-[1.2] flex flex-col items-center"
                style={{ fontFamily: "'Outfit'" }}
              >
                <span>PARENTS CORNER-ACHIEVEMENT BOARD</span>
              </span>
            </div>

            {/* Title */}
            <div className="mb-6 max-w-5xl">
              <h1
                className={`${playfair.className} text-[#f0f0f0] text-[3rem] md:text-[3rem] leading-[1.1]`}
                style={{ fontWeight: 800, fontFamily: "'Playfair Display'" }}
              >
                India's Sharpest Young Minds
              </h1>
            </div>

            {/* Description */}
            <div className="mb-5 max-w-3xl">
              <p
                className={`${playfair.className} text-[#9ca3af] text-[17px] md:text-[19px] italic opacity-80`}
                style={{ fontFamily: "'Outfit'" }}

              >
                Ranked by milestone completion speed. Verified. Recognised. Celebrated
              </p>
            </div>

            {/* Reward Badge */}
            <div className="mb-7">
              <div
                className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-[#554711]"
                style={{
                  background: "linear-gradient(97.75deg, rgba(200, 174, 26, 0.16) 0%, rgba(200, 194, 26, 0.08) 100%)",
                }}
              >
                {/* Logo Box */}
                {/* <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center p-1"></div> */}

                {/* Text */}
                <p
                  className="text-[#F5AB23] text-[14px]"
                  style={{ fontFamily: "Outfit", fontWeight: 600 }}
                >
                  Speed rankings reset every Monday

                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div
        className="bg-[#0f0f0f] px-  6 py-3.5 rounded-xl flex items-center justify-between gap-4 flex-wrap">

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap mx-auto">
          <CategoryTab label="Streak Keepers" />
          <CategoryTab label="All Milestones" active />
          <CategoryTab label="Verifications" />
        </div>

        {/* Time Filters */}
        <div className="flex bg-[#19140D] rounded-full p-1 border border-white/[0.06] mx-auto">
          <button className="px-5 py-1.5 rounded-full bg-[#57471B] text-white text-[0.8rem] font-bold">
            Weekly
          </button>
          <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold ">
            Monthly
          </button>
          <button className="px-5 py-1.5 rounded-full text-[#9ca3af] text-[0.8rem] font-bold ">
            All Time
          </button>
        </div>

      </div>


      <div
        className="bg-[#0f0f0f]  rounded-xl flex items-center justify-between gap-4 flex-wrap border-b border-white/10">

      </div>


      <section style={{
        background: "#0f0f0f", minHeight: "100vh", padding: "48px 40px 16px 40px", fontFamily: "sans-serif", position: "relative"
      }}>

        {/* Header */}
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>

          {/* Label */}
          <p style={{ color: "#A78BFA", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", margin: "0 0 8px 0", textTransform: "uppercase", fontFamily: "'Outfit'", lineHeight: "100%", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#F5AB23", fontSize: "14px" }}>⚡</span> PARENTS CORNER
          </p>

          {/* Title */}
          <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800, margin: "0 0 10px 0", lineHeight: 1.2, fontFamily: "'Playfair Display'" }}>
            Top Parents — This Week
          </h1>

          {/* Subtitle */}
          <p style={{ color: "#9B8F85", fontSize: "15px", margin: "0 0 8px 0", fontFamily: "'Outfit'", fontWeight: 400 }}>
            Parents who completed milestones the fastest, verified in the UltiMate app.
          </p>

          {/* Badge */}
          <div style={{ display: "inline-block", border: "0.5px solid #554711", borderRadius: "999px", padding: "6px 16px", color: "#F5AB23", fontSize: "12px", marginBottom: "40px", background: "linear-gradient(97.75deg, rgba(200, 174, 26, 0.16) 0%, rgba(200, 194, 26, 0.08) 100%)", fontFamily: "'Outfit'", fontWeight: 600, lineHeight: "100%" }}>
            Top 3 readers receive Crossword Bookstore coupons every Monday
          </div>

          {/* Section Label */}
          <p style={{ color: "#5C5248", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", margin: "0 0 16px 0", fontFamily: "'Outfit'", textTransform: "uppercase" }}>
            This Week's Top Performers
          </p>

          {/* Top 3 Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              {
                rank: 1,
                name: "Priya Mehta",
                title: "Parent of Aarav · Primary",
                avatar: topParents[0]?.avatar,
                milestones: 100,
                streak: "22-day streak",
                tag: "Speed leader",
                medal: "🥇",
                rankColor: "#C8AE1A",
                rankBg: "rgba(200,174,26,0.18)",
                border: "rgba(200,174,26,0.25)",
                progressColor: "#C8AE1A",
              },
              {
                rank: 2,
                name: "Rajesh Joshi",
                title: "Parent of Meera · Primary",
                avatar: topParents[1]?.avatar,
                milestones: 98,
                streak: "18-day streak",
                tag: "98% verified",
                medal: "🥈",
                rankColor: "#A0A0A0",
                rankBg: "rgba(160,160,160,0.15)",
                border: "rgba(160,160,160,0.2)",
                progressColor: "#C8AE1A",
              },
              {
                rank: 3,
                name: "Neha Sharma",
                title: "Parent of Rohan · Secondary I",
                avatar: topParents[2]?.avatar,
                milestones: 95,
                streak: "14-day streak",
                tag: "Top verifier",
                medal: "🥉",
                rankColor: "#CD7F32",
                rankBg: "rgba(205,127,50,0.15)",
                border: "rgba(205,127,50,0.2)",
                progressColor: "#C8AE1A",
              },
            ].map((entry) => (
              <div key={entry.rank} style={{
                background: "#1A1612",
                border: `1px solid ${entry.border}`,
                borderRadius: "16px",
                padding: "20px",
                position: "relative",
                fontFamily: "'Outfit'",
              }}>

                {/* Top row: rank badge + medal */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{
                    background: entry.rankBg,
                    border: `1px solid ${entry.rankColor}44`,
                    borderRadius: "999px",
                    padding: "4px 10px",
                    color: entry.rankColor,
                    fontSize: "13px",
                    fontWeight: 700,
                  }}>
                    #{entry.rank}
                  </div>
                  <span style={{ fontSize: "28px", lineHeight: 1 }}>{entry.medal}</span>
                </div>

                {/* Avatar */}
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "2px solid #2a2a2a",
                  background: "#1f1f1f",
                  marginBottom: "12px",
                }}>
                  <img src={entry.avatar} alt={entry.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Name */}
                <p style={{ color: "#F0EAE2", fontSize: "16px", fontWeight: 700, margin: "0 0 4px 0", lineHeight: "100%" }}>
                  {entry.name}
                </p>

                {/* Title */}
                <p style={{ color: "#6B4226", fontSize: "12px", fontWeight: 500, margin: "0 0 20px 0", lineHeight: "100%" }}>
                  {entry.title}
                </p>

                {/* Progress */}
                <div style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ color: "#5C5248", fontSize: "11px", fontWeight: 500 }}>Milestones completed</span>
                    <span style={{ color: "#F0EAE2", fontSize: "11px", fontWeight: 700 }}>{entry.milestones}%</span>
                  </div>
                  <div style={{ background: "#2C2620", borderRadius: "999px", height: "5px", overflow: "hidden" }}>
                    <div style={{
                      width: `${entry.milestones}%`,
                      height: "100%",
                      background: entry.progressColor,
                      borderRadius: "999px",
                    }} />
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <div style={{
                    border: "0.5px solid #554711",
                    borderRadius: "999px",
                    padding: "5px 12px",
                    color: "#F5AB23",
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "linear-gradient(97.75deg, rgba(200, 174, 26, 0.16) 0%, rgba(200, 194, 26, 0.08) 100%)",
                  }}>
                    {entry.streak}
                  </div>
                  <div style={{
                    border: "0.5px solid #554711",
                    borderRadius: "999px",
                    padding: "5px 12px",
                    color: "#F5AB23",
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "linear-gradient(97.75deg, rgba(200, 174, 26, 0.16) 0%, rgba(200, 194, 26, 0.08) 100%)",
                  }}>
                    {entry.tag}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      <section style={{
        background: "#1A1612",
        width: "900px",
        margin: "auto",
        borderRadius: "20px",
        border: "1px solid #2a2a2a",
        fontFamily: "'Outfit', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Header Row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 24px",
          borderBottom: "1px solid #2C2620",
          gap: "16px",
        }}>
          <div style={{ width: "32px", color: "#5C5248", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", flexShrink: 0 }}>#</div>
          <div style={{ width: "42px", flexShrink: 0 }} /> {/* avatar spacer */}
          <div style={{ width: "310px", color: "#5C5248", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", flexShrink: 0 }}>PARENT</div>
          <div style={{ width: "120px", color: "#5C5248", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", flexShrink: 0, textAlign: "right" }}>STREAK</div>
          <div style={{ width: "76px", color: "#5C5248", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", flexShrink: 0, textAlign: "right" }}>VERIFIED</div>
          <div style={{ width: "40px", color: "#5C5248", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", flexShrink: 0, textAlign: "right" }}>CHANGE</div>
        </div>

        {leaderboardData.map((entry, index) => (
          <div
            key={entry.rank}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "13px 24px",
              borderBottom: index < leaderboardData.length - 1 ? "1px solid #2C2620" : "none",
              gap: "16px",
              height: "69px",
            }}
          >
            {/* Rank */}
            <div style={{
              width: "32px",
              color: "#5C5248",
              fontSize: "15px",
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
              borderRadius: "10px",
              border: "1px solid #2a2a2a",
              overflow: "hidden",
              flexShrink: 0,
              background: "#1f1f1f",
            }}>
              <img
                // src={entry.avatar}
                alt={"image"}
                style={{ width: "100%", height: "100%", objectFit: "cover", }}
              />
            </div>

            {/* Name + Title */}
            <div style={{ width: "310px", flexShrink: 0 }}>
              <p style={{ color: "#F0EAE2", fontSize: "14px", fontWeight: 600, margin: "0 0 5px 0", lineHeight: "100%", fontFamily: "'Outfit'" }}>
                {entry.name}
              </p>
              <p style={{ color: "#6B4226", fontSize: "12px", fontWeight: 500, margin: 0, lineHeight: "100%", fontFamily: "'Outfit'" }}>
                {entry.title}
              </p>
            </div>

            {/* Streak */}
            <div style={{
              width: "120px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "4px",
            }}>
              <span style={{ fontSize: "14px" }}>🔥</span>
              <span style={{ color: "#E8782A", fontSize: "14px", fontWeight: 700, fontFamily: "'Outfit'" }}>
                {entry.streak} days
              </span>
            </div>

            {/* Verified % */}
            <div style={{
              width: "76px",
              textAlign: "right",
              color: "#f0eae2",
              fontSize: "15px",
              fontWeight: 700,
              flexShrink: 0,
              fontFamily: "'Outfit'",
            }}>
              {entry.minutes}%
            </div>

            {/* Rank Change */}
            <div style={{
              width: "40px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "2px",
            }}>
              <span style={{ fontSize: "11px", color: entry.change > 0 ? "#22c55e" : "#ef4444" }}>
                {entry.change > 0 ? "▲" : "▼"}
              </span>
              <span style={{ color: entry.change > 0 ? "#22c55e" : "#ef4444", fontSize: "14px", fontWeight: 700, fontFamily: "'Outfit'" }}>
                {Math.abs(entry.change)}
              </span>
            </div>

          </div>
        ))}

      </section>


      <section style={{
        background: "#18140C",
        marginTop: "201px",
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
          Making a difference, one milestone at a time.
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
          background: "#F5AB23",
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
          color: "#5D4A29",
          fontSize: "12px",
          fontWeight: 400,
          margin: "8px 0 0 0",
          fontFamily: "'Outfit'",
          lineHeight: "19.2px",
          letterSpacing: "0%",
          maxWidth: "520px",

        }}>
          All scores are recorded in-app and automatically verified. Only families who opted in appear publicly.
          Manage visibility in the UltiMate app under Privacy Settings. Crossword coupons are subject to availability
          and delivered to registered parent email.
        </p>

      </section>


    </main >
  );
}


function CategoryTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-medium transition-colors ${active
        ? "bg-[#574A1B] border border-[#F5AB23] text-white font-semibold"
        : "bg-[#1A1612] border border-[#2C2620] text-[#9B8F85] "
        }`}
    >
      {label}
    </button>
  );
}
