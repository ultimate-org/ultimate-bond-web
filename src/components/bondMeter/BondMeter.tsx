"use client";

import React, { useState, useEffect, useRef } from 'react';

// Data types
type GoalData = {
  score: number;
  title: string;
  sub: string;
};

type MetricData = {
  before: GoalData;
  after: GoalData;
};

export type MetricKey = 'emotional' | 'confidence' | 'curiosity' | 'discipline' | 'bond' | 'resilience';
export type StateMode = 'before' | 'after';

const DATA: Record<MetricKey, MetricData> = {
  emotional: {
    before: { score: 165, title: 'From <strong>"stop crying"</strong> heard as rejection', sub: 'In the chaos of a hard day, the words come out sharp. The moment closes before it ever opened. Your child learns to hide what they feel — and so do you.' },
    after: { score: 820, title: 'From <strong>"stop crying"</strong> to <strong>"tell me what happened"</strong>', sub: 'Your child learns to name what they feel — and you learn to listen before reacting. That single shift rebuilds the bond you have been missing.' }
  },
  confidence: {
    before: { score: 140, title: '<strong>"It is too hard. I am bad at this."</strong>', sub: 'Tears at homework. Quits midway. Avoids anything new because failing once feels final. The voice inside is already saying "I cannot."' },
    after: { score: 790, title: 'From <strong>"I cannot"</strong> to <strong>"let me try one more way"</strong>', sub: 'Tries. Pauses. Tries differently. The hardest thing was never the task — it was the belief. Self-trust, built one tiny rep at a time.' }
  },
  curiosity: {
    before: { score: 200, title: '<strong>"Can I have the phone?"</strong> on loop', sub: 'Every quiet moment becomes a swipe. The default setting of the mind is consumption, never wonder. Curiosity has gone to sleep before it ever woke up.' },
    after: { score: 850, title: 'From <strong>endless scrolling</strong> to <strong>endless questions</strong>', sub: 'A child whose questions outnumber their requests. The mind has rediscovered its first language. Wonder, restored.' }
  },
  discipline: {
    before: { score: 175, title: '<strong>"I will do it after this video."</strong>', sub: 'Homework forgotten. Brushing skipped. Every small commitment slips through fingers. The follow-through muscle never gets exercised.' },
    after: { score: 805, title: 'From <strong>"in 5 more minutes"</strong> to <strong>"already done"</strong>', sub: 'Self-started. Self-completed. The reward isn\'t the praise — it is the quiet pride underneath. Discipline as identity.' }
  },
  bond: {
    before: { score: 155, title: '<strong>"Fine. Can I go now?"</strong>', sub: 'Five-second answers. Eye contact gone. The door is closing earlier each year. The silence at dinner is louder than any argument.' },
    after: { score: 870, title: 'From <strong>"how was school"</strong> to <strong>"actually, today…"</strong>', sub: 'Stories spill out unprompted. Inside jokes. The kind of closeness you cannot fake — or force.' }
  },
  resilience: {
    before: { score: 180, title: '<strong>"I lost. Everyone hates me."</strong>', sub: 'One bad moment becomes the whole day. Setbacks feel permanent, personal, total. The world feels fragile because they feel fragile.' },
    after: { score: 815, title: 'From <strong>melting down</strong> to <strong>bouncing back</strong>', sub: 'Disappointment without collapse. The first sign of an adult who will not break under pressure.' }
  }
};

const TIER_NAMES = ['Distant', 'Awakening', 'Bonded', 'Cosmic'];
const CHIPS = [
  { key: 'emotional', label: 'Emotional' },
  { key: 'confidence', label: 'Confidence' },
  { key: 'curiosity', label: 'Curiosity' },
  { key: 'discipline', label: 'Discipline' },
  { key: 'bond', label: 'Bond' },
  { key: 'resilience', label: 'Resilience' }
];

const ARC_LENGTH = 439.8;
const MIN_ANGLE = -90, MAX_ANGLE = 90;
const scoreToAngle = (s: number) => MIN_ANGLE + Math.max(0, Math.min(1, s / 1000)) * (MAX_ANGLE - MIN_ANGLE);
const scoreToDashOffset = (s: number) => ARC_LENGTH * (1 - Math.max(0, Math.min(1, s / 1000)));
const scoreToTier = (s: number) => s < 250 ? 0 : s < 500 ? 1 : s < 750 ? 2 : 3;

export default function BondMeter() {
  const [currentKey, setCurrentKey] = useState<MetricKey>('emotional');
  const [currentState, setCurrentState] = useState<StateMode>('before');
  const [score, setScore] = useState(0);
  const [deltaVisible, setDeltaVisible] = useState(false);
  const [deltaText, setDeltaText] = useState('+0 pts');
  const [needleAnimating, setNeedleAnimating] = useState(false);
  const [isBumping, setIsBumping] = useState(false);

  const prevScoreRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const initTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearInitTimeouts = () => {
    initTimeouts.current.forEach(clearTimeout);
    initTimeouts.current = [];
  };

  const triggerTransition = (targetScore: number, shouldAnimateDelta: boolean) => {
    const prevScore = prevScoreRef.current;
    if (shouldAnimateDelta && targetScore > prevScore) {
      setDeltaText(`+${targetScore - prevScore} pts`);
      setDeltaVisible(true);
      const t = setTimeout(() => setDeltaVisible(false), 3000);
      initTimeouts.current.push(t);
    } else {
      setDeltaVisible(false);
    }

    setNeedleAnimating(true);
    const animTimeout = setTimeout(() => setNeedleAnimating(false), 1600);
    initTimeouts.current.push(animTimeout);

    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

    const duration = 1600;
    let startTimestamp: number | null = null;

    const animateCount = (now: number) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = now - startTimestamp;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(prevScore + (targetScore - prevScore) * ease);
      setScore(currentVal);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animateCount);
      } else {
        setScore(targetScore);
        prevScoreRef.current = targetScore;
        setIsBumping(true);
        const bumpTimeout = setTimeout(() => setIsBumping(false), 500);
        initTimeouts.current.push(bumpTimeout);
      }
    };
    animationFrameId.current = requestAnimationFrame(animateCount);
  };

  const handleChipClick = (key: MetricKey) => {
    if (key === currentKey) return;
    clearInitTimeouts();
    setCurrentKey(key);
    triggerTransition(DATA[key][currentState].score, true);
  };

  const handleBeforeClick = () => {
    if (currentState === 'before') return;
    clearInitTimeouts();
    setCurrentState('before');
    triggerTransition(DATA[currentKey].before.score, false);
  };

  const handleAfterClick = () => {
    if (currentState === 'after') return;
    clearInitTimeouts();
    setCurrentState('after');
    triggerTransition(DATA[currentKey].after.score, true);
  };

  useEffect(() => {
    const beforeScore = DATA.emotional.before.score;
    setCurrentKey('emotional');
    setCurrentState('before');
    setScore(beforeScore);
    prevScoreRef.current = beforeScore;

    return () => {
      clearInitTimeouts();
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const cx = 200, cy = 180, rOuter = 156, rInner = 148, rMajor = 142;
  const ticks = Array.from({ length: 11 }, (_, i) => {
    const t = i / 10;
    const a = (-180 + t * 180) * Math.PI / 180;
    const isMajor = i % 5 === 0;
    const r2 = isMajor ? rMajor : rInner;
    return {
      key: i,
      x1: cx + rOuter * Math.cos(a), y1: cy + rOuter * Math.sin(a),
      x2: cx + r2 * Math.cos(a), y2: cy + r2 * Math.sin(a),
      stroke: isMajor ? 'rgba(255, 185, 103, 0.7)' : 'rgba(255, 165, 60, 0.25)',
      strokeWidth: isMajor ? '2' : '1.2'
    };
  });

  const activeData = DATA[currentKey][currentState];
  const activeTier = scoreToTier(score);
  const streakText = score < 250 ? '0 days' : score < 500 ? '14 days' : score < 750 ? '34 days' : '62 days';
  const isAfter = currentState === 'after';

  return (
    <>
      {/* Keyframe animations — injected once */}
      <style>{`
        @keyframes ubt-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(.85)} }
        @keyframes ubt-glow-pulse { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
        @keyframes ubt-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes ubt-sparkle-1 { 0%,100%{transform:translate(0,0) scale(1);opacity:.8} 50%{transform:translate(8px,-12px) scale(1.3);opacity:1} }
        @keyframes ubt-sparkle-2 { 0%,100%{transform:translate(0,0) scale(1);opacity:.6} 50%{transform:translate(-10px,-8px) scale(1.4);opacity:1} }
        @keyframes ubt-bump { 0%{transform:scale(1)} 40%{transform:scale(1.12)} 100%{transform:scale(1)} }
        .ubt-needle { transform-origin: 200px 180px; transition: transform 1.6s cubic-bezier(.34,1.56,.64,1); }
        .ubt-needle.animating { filter: drop-shadow(0 0 8px rgba(255,217,154,.9)) drop-shadow(0 0 16px rgba(255,140,30,.5)); }
        .ubt-arc-fill { transition: stroke-dashoffset 1.6s cubic-bezier(.34,1.56,.64,1); }
        .ubt-float { animation: ubt-float 5s ease-in-out infinite; }
        .ubt-glow-pulse { animation: ubt-glow-pulse 4s ease-in-out infinite; }
        .ubt-sparkle-1 { animation: ubt-sparkle-1 4s ease-in-out infinite; }
        .ubt-sparkle-2 { animation: ubt-sparkle-2 3.5s ease-in-out infinite .5s; }
        .ubt-sparkle-3 { animation: ubt-sparkle-1 5s ease-in-out infinite 1s; }
        .ubt-sparkle-4 { animation: ubt-sparkle-2 4.5s ease-in-out infinite 1.5s; }
        .ubt-pulse { animation: ubt-pulse 2s ease-in-out infinite; }
        .ubt-pulse-fast { animation: ubt-pulse 1.6s ease-in-out infinite; }
        .ubt-bump { animation: ubt-bump .5s ease-out; }
      `}</style>

      <section className="relative bg-[#050407] text-white py-[clamp(60px,8vw,100px)] px-[clamp(16px,3vw,24px)] pb-[clamp(80px,10vw,120px)] overflow-hidden">

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 z-0"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(255,140,30,.18), transparent 70%), radial-gradient(ellipse 60% 50% at 15% 70%, rgba(239,100,20,.12), transparent 70%), radial-gradient(ellipse 50% 60% at 85% 80%, rgba(255,170,50,.1), transparent 70%)' }} />
        <div className="pointer-events-none absolute inset-0 z-0"
          style={{ backgroundImage: 'linear-gradient(rgba(255,140,30,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,140,30,.025) 1px,transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%,black,transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%,black,transparent 80%)' }} />

        <div className="relative z-[2] max-w-[1200px] mx-auto">

          {/* ── HEADER ── */}
          <div className="text-center mb-[clamp(40px,6vw,64px)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[rgba(255,165,60,.35)] text-[#FFB967] text-[11px] font-semibold tracking-[2.4px] uppercase shadow-[inset_0_1px_0_rgba(255,200,130,.2),0_0_30px_rgba(255,140,30,.15)]"
              style={{ background: 'linear-gradient(135deg,rgba(255,140,30,.12),rgba(239,100,20,.06))' }}>
              <span className="w-[7px] h-[7px] bg-[#FFB967] rounded-full shadow-[0_0_10px_#FFB967,0_0_20px_rgba(255,185,103,.6)] ubt-pulse" />
              The transformation
            </div>
            <h2 className="text-[clamp(28px,5.6vw,60px)] font-bold tracking-[-1.8px] leading-[1.08] mb-[18px]">
              The same child.<br />
              <em className="not-italic font-medium" style={{ background: 'linear-gradient(135deg,#FFD89A 0%,#FF8C1E 35%,#FF6B0F 70%,#C94100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 24px rgba(255,140,30,.4))' }}>
                An entirely different bond.
              </em>
            </h2>
            <p className="text-[rgba(255,255,255,.55)] text-[clamp(14px,1.4vw,17px)] max-w-[640px] mx-auto leading-[1.7]">
              Watch your family&apos;s Bond Meter climb as your child grows. From distant and distracted to confident, curious, and connected — measured in real moments, not in time.
            </p>
          </div>

          {/* ── STATE TOGGLE ── */}
          <div role="tablist" className="flex gap-[6px] p-[5px] mx-auto mb-8 w-fit rounded-[14px] border border-[rgba(255,140,30,.2)] shadow-[inset_0_2px_6px_rgba(0,0,0,.6),inset_0_1px_0_rgba(255,165,60,.05)]"
            style={{ background: 'linear-gradient(180deg,rgba(0,0,0,.5),rgba(15,9,4,.6))' }}>
            <button
              role="tab"
              aria-selected={!isAfter}
              onClick={handleBeforeClick}
              className={`inline-flex items-center gap-2 px-6 py-[11px] rounded-[10px] text-[13px] font-semibold tracking-[.3px] cursor-pointer font-[inherit] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] ${!isAfter ? 'text-[#1a0a02] shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_4px_16px_rgba(255,140,30,.5),0_0_24px_rgba(255,140,30,.3)]' : 'bg-transparent border-none text-[rgba(255,255,255,.5)] hover:text-[rgba(255,255,255,.85)]'}`}
              style={!isAfter ? { background: 'linear-gradient(135deg,#FF8C1E 0%,#EF6410 100%)' } : {}}>
              <span className={`w-[7px] h-[7px] rounded-full ${!isAfter ? 'bg-[#1a0a02] opacity-50' : 'bg-current opacity-60'}`} />
              Before
            </button>
            <button
              role="tab"
              aria-selected={isAfter}
              onClick={handleAfterClick}
              className={`inline-flex items-center gap-2 px-6 py-[11px] rounded-[10px] text-[13px] font-semibold tracking-[.3px] cursor-pointer font-[inherit] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] ${isAfter ? 'text-[#1a0a02] shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_4px_16px_rgba(255,140,30,.5),0_0_24px_rgba(255,140,30,.3)]' : 'bg-transparent border-none text-[rgba(255,255,255,.5)] hover:text-[rgba(255,255,255,.85)]'}`}
              style={isAfter ? { background: 'linear-gradient(135deg,#FF8C1E 0%,#EF6410 100%)' } : {}}>
              <span className={`w-[7px] h-[7px] rounded-full ${isAfter ? 'bg-[#1a0a02] opacity-50' : 'bg-current opacity-60'}`} />
              After UltiMate
            </button>
          </div>

          {/* ── STAGE ── */}
          <div className="relative rounded-[clamp(20px,2.5vw,28px)] pt-0 pb-[clamp(24px,4vw,40px)] px-[clamp(20px,3.5vw,48px)] overflow-hidden border border-[rgba(255,140,30,.18)] shadow-[inset_0_1px_0_rgba(255,165,60,.1),0_40px_100px_rgba(0,0,0,.7),0_0_80px_rgba(255,140,30,.05)]"
            style={{ background: 'linear-gradient(180deg,rgba(20,12,6,.85) 0%,rgba(12,7,3,.95) 100%)' }}>

            {/* Stage decorative blobs */}
            <div className="pointer-events-none absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(255,140,30,.18),transparent 70%)' }} />
            <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(255,100,30,.12),transparent 70%)' }} />

            {/* Grid: mascot + meter */}
            <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-[clamp(24px,4vw,56px)] items-center mb-[clamp(32px,4vw,48px)]">

              {/* ── MASCOT ── */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full h-[340px] md:h-[500px] overflow-visible flex items-center justify-center">
                  {/* Glow */}
                  <div className={`absolute inset-[6%] rounded-full blur-2xl z-0 ubt-glow-pulse transition-[background] duration-[600ms] ${isAfter ? '' : ''}`}
                    style={{ background: isAfter ? 'radial-gradient(ellipse 65% 55% at 50% 50%,rgba(255,140,30,.5),transparent 70%)' : 'radial-gradient(ellipse 65% 55% at 50% 50%,rgba(120,130,150,.25),transparent 70%)' }} />

                  {/* Pedestal */}
                  <div className="absolute bottom-[4%] left-[18%] right-[18%] h-[18px] rounded-full blur-md z-0 transition-[background] duration-[600ms]"
                    style={{ background: isAfter ? 'radial-gradient(ellipse,rgba(255,140,30,.55) 0%,rgba(255,140,30,.2) 40%,transparent 70%)' : 'radial-gradient(ellipse,rgba(80,90,110,.4) 0%,rgba(50,60,80,.15) 40%,transparent 70%)' }} />

                  {/* Sparkles */}
                  {[
                    { cls: 'top-[14%] left-[6%] w-[6px] h-[6px] bg-[#FFB967] shadow-[0_0_14px_#FF8C1E] ubt-sparkle-1', },
                    { cls: 'top-[24%] right-[4%] w-[4px] h-[4px] bg-[#FFD89A] shadow-[0_0_10px_#FFB967] ubt-sparkle-2', },
                    { cls: 'bottom-[32%] left-[2%] w-[5px] h-[5px] bg-[#FF8C1E] shadow-[0_0_14px_#FF6B0F] ubt-sparkle-3', },
                    { cls: 'bottom-[44%] right-0 w-[3px] h-[3px] bg-[#FFD89A] shadow-[0_0_8px_#FFB967] ubt-sparkle-4', },
                  ].map((sp, i) => (
                    <div key={i} className={`absolute rounded-full pointer-events-none z-[2] transition-opacity duration-[400ms] ${sp.cls} ${!isAfter ? 'opacity-0' : ''}`} />
                  ))}

                  {/* Images */}
                  <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">

                    {/* AFTER */}
                    <div
                      className={`absolute ubt-float transition-[opacity,transform] duration-[600ms] [transition-timing-function:cubic-bezier(.4,0,.2,1)]
${isAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-[.92]'}`}
                    >
                      <img
                        src="/images/after_mascott.png"
                        alt="After mascot"
                        className="w-auto h-[600px] max-w-none object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,.6)]"
                      />
                    </div>

                    {/* BEFORE */}
                    <div
                      className={`absolute ubt-float transition-[opacity,transform] duration-[600ms] [transition-timing-function:cubic-bezier(.4,0,.2,1)]
${!isAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-[.92]'}`}
                    >
                      <img
                        src="/images/before_mascott.png"
                        alt="Before mascot"
                        className="w-auto h-[600px] max-w-none object-contain"
                        style={{
                          filter:
                            'drop-shadow(0 16px 32px rgba(0,0,0,.6)) drop-shadow(0 0 30px rgba(100,110,130,.25)) saturate(.85) brightness(.92)',
                        }}
                      />
                    </div>

                  </div>
                </div>

                {/* Status pill */}
                <div className={`inline-flex items-center gap-[10px] px-[18px] py-[10px] rounded-full border transition-all duration-[400ms] shadow-[0_8px_24px_rgba(0,0,0,.5)] ${isAfter ? 'border-[rgba(255,140,30,.35)] shadow-[inset_0_1px_0_rgba(255,200,130,.15),0_8px_24px_rgba(0,0,0,.5),0_0_20px_rgba(255,140,30,.15)]' : 'border-[rgba(120,130,150,.3)]'}`}
                  style={{ background: 'linear-gradient(135deg,rgba(40,22,8,.95),rgba(20,12,4,.95))' }}>
                  <span className={`text-[10px] tracking-[1.5px] uppercase font-semibold ${isAfter ? 'text-[rgba(255,185,103,.7)]' : 'text-[rgba(180,190,210,.5)]'}`}>Level</span>
                  <span className={`text-[13px] font-semibold tabular-nums ${isAfter ? 'text-[#FFD89A]' : 'text-[rgba(210,215,230,.7)]'}`}>{TIER_NAMES[activeTier]}</span>
                  <span className={`w-px h-[12px] ${isAfter ? 'bg-[rgba(255,140,30,.3)]' : 'bg-[rgba(180,190,210,.2)]'}`} />
                  <span className={`text-[10px] tracking-[1.5px] uppercase font-semibold ${isAfter ? 'text-[rgba(255,185,103,.7)]' : 'text-[rgba(180,190,210,.5)]'}`}>Streak</span>
                  <span className={`text-[13px] font-semibold tabular-nums ${isAfter ? 'text-[#FFD89A]' : 'text-[rgba(210,215,230,.7)]'}`}>{streakText}</span>
                </div>
              </div>

              {/* ── METER ── */}
              <div className="relative w-full">
                <div className="rounded-[24px] p-[24px_24px_22px] flex flex-col gap-[18px] border border-[rgba(255,140,30,.2)] shadow-[inset_0_1px_0_rgba(255,165,60,.12),inset_0_-20px_40px_rgba(0,0,0,.4),0_20px_50px_rgba(0,0,0,.6)]"
                  style={{ background: 'radial-gradient(ellipse at 50% 100%,rgba(255,140,30,.08),transparent 70%),linear-gradient(180deg,rgba(15,9,4,.6),rgba(8,5,2,.9))' }}>

                  {/* Meter header */}
                  <div className="flex justify-between items-center gap-3 flex-wrap">
                    <div className="inline-flex items-center gap-[10px] text-[11px] text-[rgba(255,185,103,.85)] tracking-[2px] uppercase font-semibold">
                      <span className="w-[7px] h-[7px] rounded-full bg-[#FF8C1E] shadow-[0_0_10px_#FF8C1E,0_0_20px_rgba(255,140,30,.5)] ubt-pulse-fast" />
                      Bond meter
                    </div>
                    <div className="text-[10px] text-[rgba(255,255,255,.4)] tracking-[1.5px] uppercase font-semibold transition-colors duration-[400ms]">
                      Zone · {TIER_NAMES[activeTier]}
                    </div>
                  </div>

                  {/* Gauge */}
                  <div className="relative w-full flex justify-center">
                    {/* Delta chip */}
                    <div className={`absolute top-0 right-0 inline-flex items-center gap-[6px] px-3 py-[6px] rounded-full border border-[rgba(255,140,30,.35)] text-[11px] font-semibold text-[#FFD89A] tabular-nums z-[4] transition-all duration-[400ms] shadow-[0_4px_16px_rgba(0,0,0,.5),0_0_16px_rgba(255,140,30,.2)] ${deltaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
                      style={{ background: 'linear-gradient(135deg,rgba(40,22,8,.95),rgba(20,12,4,.95))' }}>
                      <span className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-[#FFD89A]" style={{ filter: 'drop-shadow(0 0 4px #FF8C1E)' }} />
                      {deltaText}
                    </div>

                    <svg className="w-full max-w-[420px] h-auto block" style={{ filter: 'drop-shadow(0 0 30px rgba(255,140,30,.2))' }}
                      viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="arcBg" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3a2a14" />
                          <stop offset="33%" stopColor="#5a3818" />
                          <stop offset="66%" stopColor="#7a4218" />
                          <stop offset="100%" stopColor="#8a3818" />
                        </linearGradient>
                        <linearGradient id="arcActive" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FFD89A" />
                          <stop offset="33%" stopColor="#FFB76B" />
                          <stop offset="66%" stopColor="#FF8C1E" />
                          <stop offset="100%" stopColor="#EF4410" />
                        </linearGradient>
                        <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <linearGradient id="needleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFE4B0" />
                          <stop offset="50%" stopColor="#FF8C1E" />
                          <stop offset="100%" stopColor="#C94100" />
                        </linearGradient>
                      </defs>

                      <path d="M 50 180 A 150 150 0 0 1 350 180" fill="none" stroke="#0a0603" strokeWidth="42" strokeLinecap="round" />
                      <path d="M 60 180 A 140 140 0 0 1 340 180" fill="none" stroke="url(#arcBg)" strokeWidth="28" strokeLinecap="round" opacity="0.55" />

                      <g stroke="rgba(0,0,0,.6)" strokeWidth="2.5">
                        <line x1="93" y1="103" x2="100" y2="112" />
                        <line x1="200" y1="40" x2="200" y2="50" />
                        <line x1="307" y1="103" x2="300" y2="112" />
                      </g>

                      <path className="ubt-arc-fill" d="M 60 180 A 140 140 0 0 1 340 180"
                        fill="none" stroke="url(#arcActive)" strokeWidth="28" strokeLinecap="round"
                        filter="url(#arcGlow)" strokeDasharray="439.8"
                        strokeDashoffset={scoreToDashOffset(score)} />

                      {ticks.map(tick => (
                        <line key={tick.key} x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2}
                          stroke={tick.stroke} strokeWidth={tick.strokeWidth} strokeLinecap="round" />
                      ))}

                      <circle cx="200" cy="180" r="28" fill="#0a0603" stroke="rgba(255,140,30,.3)" strokeWidth="1" />

                      <g className={`ubt-needle ${needleAnimating ? 'animating' : ''}`}
                        style={{ transform: `rotate(${scoreToAngle(score)}deg)` }}>
                        <path d="M 200 180 L 196 60 Q 200 50 204 60 Z" fill="url(#needleGrad)" stroke="#8B2a00" strokeWidth="0.8" strokeLinejoin="round" />
                        <path d="M 198 65 L 200 50 L 202 65 Z" fill="#FFE4B0" />
                      </g>

                      <circle cx="200" cy="180" r="14" fill="url(#needleGrad)" stroke="#8B2a00" strokeWidth="1" />
                      <circle cx="200" cy="180" r="7" fill="#1a0a02" />
                      <circle cx="198" cy="178" r="2.5" fill="#FFE4B0" opacity="0.7" />
                    </svg>
                  </div>

                  {/* Readout */}
                  <div className="text-center pt-[14px] pb-1 border-t border-[rgba(255,140,30,.12)] flex flex-col items-center gap-1">
                    <div className="inline-flex items-baseline gap-1">
                      <span className={`text-[clamp(36px,5vw,52px)] font-bold tracking-[-1.5px] leading-none tabular-nums ${isBumping ? 'ubt-bump' : ''}`}
                        style={{ background: 'linear-gradient(135deg,#FFE4B0 0%,#FF8C1E 60%,#FF6B0F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 16px rgba(255,140,30,.4))' }}>
                        {score}
                      </span>
                      <span className="text-[clamp(14px,1.8vw,18px)] text-[rgba(255,185,103,.5)] font-semibold tracking-[-0.3px] tabular-nums">/ 1000</span>
                    </div>
                    <div className="text-[10px] tracking-[2.4px] uppercase text-[rgba(255,185,103,.6)] font-semibold">Bond score</div>
                  </div>

                  {/* Tier scale */}
                  <div className="grid grid-cols-4 gap-[6px] pt-[14px] border-t border-[rgba(255,140,30,.15)]">
                    {[['Distant', '0–249'], ['Awakening', '250–499'], ['Bonded', '500–749'], ['Cosmic', '750–1000']].map(([name, range], i) => (
                      <div key={i} className={`text-center px-1 py-2 rounded-lg border transition-all duration-[400ms] min-w-0 ${activeTier === i ? 'border-[rgba(255,165,60,.5)] shadow-[inset_0_1px_0_rgba(255,200,130,.2),0_0_16px_rgba(255,140,30,.25)]' : 'bg-[rgba(255,255,255,.02)] border-[rgba(255,255,255,.05)]'}`}
                        style={activeTier === i ? { background: 'linear-gradient(135deg,rgba(255,140,30,.25),rgba(255,100,20,.12))' } : {}}>
                        <div className={`text-[clamp(9px,1vw,10px)] font-semibold tracking-[.6px] uppercase truncate transition-colors duration-[400ms] ${activeTier === i ? 'text-[#FFD89A]' : 'text-[rgba(255,255,255,.4)]'}`}>{name}</div>
                        <div className={`text-[9px] mt-[2px] tabular-nums whitespace-nowrap transition-colors duration-[400ms] ${activeTier === i ? 'text-[rgba(255,185,103,.6)]' : 'text-[rgba(255,255,255,.25)]'}`}>{range}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>{/* /stage-grid */}

            {/* ── OUTCOME ── */}
            <div className="relative rounded-[20px] p-[clamp(22px,3vw,32px)_clamp(22px,3vw,36px)] overflow-hidden border border-[rgba(255,140,30,.15)]"
              style={{ background: 'linear-gradient(180deg,rgba(20,12,6,.6),rgba(12,7,3,.8))' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,140,30,.6),transparent)' }} />
              <h3 className="text-[clamp(18px,2.6vw,28px)] font-medium tracking-[-0.6px] leading-[1.3] mb-3 text-white [&_strong]:font-semibold"
                style={{ ['--tw-gradient-from' as string]: '#FFD89A', ['--tw-gradient-to' as string]: '#FF8C1E' }}
                dangerouslySetInnerHTML={{ __html: activeData.title.replace(/<strong>/g, '<strong style="background:linear-gradient(135deg,#FFD89A,#FF8C1E);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:600">').replace(/<\/strong>/g, '</strong>') }} />
              <p className="text-[rgba(255,255,255,.55)] text-[clamp(13px,1.4vw,14px)] leading-[1.7] m-0 max-w-[720px]">{activeData.sub}</p>
            </div>

            {/* ── CHIPS ── */}
            <div className="flex flex-wrap gap-2 justify-center mt-[clamp(24px,3vw,32px)]">
              {CHIPS.map(chip => (
                <button key={chip.key}
                  onClick={() => handleChipClick(chip.key as MetricKey)}
                  className={`inline-flex items-center gap-2 px-4 py-[9px] rounded-full border text-[12px] font-semibold cursor-pointer font-[inherit] transition-all duration-[300ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] ${currentKey === chip.key ? 'text-[#FFD89A] border-[rgba(255,165,60,.5)] shadow-[inset_0_1px_0_rgba(255,200,130,.2),0_4px_16px_rgba(255,140,30,.25)]' : 'bg-[rgba(255,255,255,.03)] backdrop-blur border-[rgba(255,255,255,.08)] text-[rgba(255,255,255,.6)] hover:bg-[rgba(255,140,30,.06)] hover:border-[rgba(255,140,30,.25)] hover:text-[rgba(255,255,255,.9)] hover:-translate-y-px'}`}
                  style={currentKey === chip.key ? { background: 'linear-gradient(135deg,rgba(255,140,30,.25),rgba(239,100,20,.12))' } : {}}>
                  <span className="w-[5px] h-[5px] rounded-full bg-current opacity-70" />
                  {chip.label}
                </button>
              ))}
            </div>

          </div>{/* /stage */}

          {/* ── PARENT CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mt-[clamp(28px,3vw,32px)]">
            {[
              { icon: '🕊️', title: 'You stop yelling', body: 'Not because you tried harder — because you finally have the tools to respond instead of react.' },
              { icon: '💬', title: 'They start talking', body: '"How was school?" stops getting "fine." Real conversations replace silence at the dinner table.' },
              { icon: '🌱', title: 'You grow together', body: 'Parenting stops feeling like a job you\'re failing at. It starts feeling like the most important thing you do.' },
            ].map((card, i) => (
              <div key={i} className="relative rounded-[18px] p-[22px] border border-[rgba(255,140,30,.15)] overflow-hidden transition-all duration-[300ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:-translate-y-[3px] hover:border-[rgba(255,165,60,.4)] hover:shadow-[inset_0_1px_0_rgba(255,200,130,.12),0_16px_40px_rgba(0,0,0,.5),0_0_32px_rgba(255,140,30,.12)] shadow-[inset_0_1px_0_rgba(255,165,60,.06),0_12px_32px_rgba(0,0,0,.4)]"
                style={{ background: 'linear-gradient(180deg,rgba(20,12,6,.7),rgba(12,7,3,.85))' }}>
                <div className="pointer-events-none absolute top-[-50%] right-[-30%] w-[200px] h-[200px] rounded-full opacity-50 hover:opacity-100 transition-opacity duration-[300ms]"
                  style={{ background: 'radial-gradient(circle,rgba(255,140,30,.1),transparent 70%)' }} />
                <div className="relative z-[1] w-10 h-10 rounded-xl flex items-center justify-center text-[18px] mb-[14px] border border-[rgba(255,165,60,.35)] shadow-[inset_0_1px_0_rgba(255,200,130,.2),0_4px_12px_rgba(255,140,30,.15)]"
                  style={{ background: 'linear-gradient(135deg,rgba(255,140,30,.3),rgba(239,100,20,.15))' }}>
                  {card.icon}
                </div>
                <h4 className="relative z-[1] text-[15px] font-semibold text-white m-0 mb-[6px]">{card.title}</h4>
                <p className="relative z-[1] text-[13px] leading-[1.6] text-[rgba(255,255,255,.55)] m-0">{card.body}</p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="text-center mt-[clamp(40px,5vw,56px)]">
            <p className="text-[rgba(255,255,255,.5)] text-[14px] mb-5">10 minutes a day. One deed. Three lives transformed.</p>
            <a href="#cta"
              className="inline-flex items-center gap-3 px-8 py-[17px] rounded-full text-[15px] font-bold text-[#1a0a02] cursor-pointer no-underline transition-all duration-[300ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.4),0_16px_40px_rgba(255,140,30,.6),0_0_60px_rgba(255,140,30,.35)]"
              style={{ background: 'linear-gradient(135deg,#FF8C1E 0%,#EF6410 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.3),0 10px 30px rgba(255,140,30,.5),0 0 40px rgba(255,140,30,.25)' }}>
              Start the transformation
              <span className="transition-transform duration-[300ms] group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}