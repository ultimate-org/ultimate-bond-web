'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MOMENTS_DATA, type Moment, type MomentTheme } from './momentsdata';

interface ActiveCard extends Moment {
  id: number;
  position: number;
  exiting?: boolean;
  entering?: boolean;
}

interface LiveMomentsStackProps {
  /** Override the default 50-item dummy data */
  data?: Moment[];
  /** Max cards visible in the stack (default 5) */
  maxVisible?: number;
  /** How long a card stays before auto-dismissing (ms, default 8000) */
  autoRemoveMs?: number;
  /** How often new cards arrive (ms, default 4000) */
  streamIntervalMs?: number;
  /** Disable the stream entirely */
  enabled?: boolean;
}

// ─── Theme styles (Tailwind arbitrary values for the custom RGBAs) ───
const themeStyles: Record<MomentTheme, {
  card: string;
  icon: string;
  meta: string;
  shine: string;
}> = {
  readometer: {
    card: [
      'bg-[linear-gradient(135deg,rgba(239,159,39,0.18)_0%,rgba(180,80,20,0.22)_100%),rgba(40,20,10,0.55)]',
      'border-[rgba(250,199,117,0.35)]',
      'shadow-[inset_0_1px_0_rgba(255,200,120,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(180,80,20,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(239,159,39,0.12)]',
    ].join(' '),
    icon: 'bg-[linear-gradient(135deg,rgba(250,199,117,0.35),rgba(239,159,39,0.15))] border-[rgba(250,199,117,0.4)]',
    meta: 'text-[#FFC78A]',
    shine: 'bg-[linear-gradient(90deg,transparent,rgba(255,200,120,0.5),transparent)]',
  },
  wordquest: {
    card: [
      'bg-[linear-gradient(135deg,rgba(139,92,246,0.22)_0%,rgba(76,29,149,0.28)_100%),rgba(25,15,50,0.55)]',
      'border-[rgba(175,169,236,0.35)]',
      'shadow-[inset_0_1px_0_rgba(200,180,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(76,29,149,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(139,92,246,0.12)]',
    ].join(' '),
    icon: 'bg-[linear-gradient(135deg,rgba(175,169,236,0.35),rgba(139,92,246,0.15))] border-[rgba(175,169,236,0.4)]',
    meta: 'text-[#C9C0FF]',
    shine: 'bg-[linear-gradient(90deg,transparent,rgba(200,180,255,0.5),transparent)]',
  },
  milestone: {
    card: [
      'bg-[linear-gradient(135deg,rgba(255,122,184,0.18)_0%,rgba(100,30,80,0.25)_100%),rgba(30,15,35,0.55)]',
      'border-[rgba(255,180,220,0.35)]',
      'shadow-[inset_0_1px_0_rgba(255,200,230,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(100,30,80,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(255,122,184,0.12)]',
    ].join(' '),
    icon: 'bg-[linear-gradient(135deg,rgba(255,180,220,0.35),rgba(255,122,184,0.15))] border-[rgba(255,180,220,0.4)]',
    meta: 'text-[#FFB4DC]',
    shine: 'bg-[linear-gradient(90deg,transparent,rgba(255,200,230,0.5),transparent)]',
  },
};

// ─── Stack position transforms (one per depth slot) ───
const POSITION_STYLES = [
  'translate-y-0 scale-100 opacity-100 z-[5]',                    // pos 0 — front
  '-translate-y-3 scale-95 opacity-[0.85] z-[4]',                 // pos 1
  '-translate-y-[22px] scale-90 opacity-[0.65] z-[3]',            // pos 2
  '-translate-y-[30px] scale-[0.85] opacity-40 z-[2]',            // pos 3
  '-translate-y-9 scale-[0.8] opacity-[0.15] z-[1]',              // pos 4 — back
];

const ENTERING_STYLE = 'translate-x-[400px] translate-y-0 scale-100 opacity-0';
const EXITING_STYLE = '!translate-x-[420px] !scale-90 !opacity-0';

export default function LiveMomentsStack({
  data = MOMENTS_DATA,
  maxVisible = 5,
  autoRemoveMs = 8000,
  streamIntervalMs = 4000,
  enabled = true,
}: LiveMomentsStackProps) {
  const [cards, setCards] = useState<ActiveCard[]>([]);
  const counterRef = useRef(0);
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const removeCard = useCallback((id: number) => {
    const t = timeoutsRef.current.get(id);
    if (t) {
      clearTimeout(t);
      timeoutsRef.current.delete(id);
    }

    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, exiting: true } : c)),
    );

    setTimeout(() => {
      setCards((prev) => {
        const filtered = prev.filter((c) => c.id !== id);
        return filtered.map((c, idx) => ({ ...c, position: idx }));
      });
    }, 500);
  }, []);

  const addCard = useCallback(() => {
    if (!data.length) return;

    const moment = data[Math.floor(Math.random() * data.length)];
    const id = ++counterRef.current;
    const newCard: ActiveCard = {
      ...moment,
      id,
      position: 0,
      entering: true,
    };

    setCards((prev) => {
      const shifted = prev
        .filter((c) => !c.exiting)
        .map((c) => ({ ...c, position: c.position + 1 }))
        .filter((c) => c.position < maxVisible);
      return [newCard, ...shifted];
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCards((prev) =>
          prev.map((c) => (c.id === id ? { ...c, entering: false } : c)),
        );
      });
    });

    const timer = setTimeout(() => removeCard(id), autoRemoveMs);
    timeoutsRef.current.set(id, timer);
  }, [data, maxVisible, autoRemoveMs, removeCard]);

  useEffect(() => {
    if (!enabled) return;

    const t1 = setTimeout(addCard, 600);
    const t2 = setTimeout(addCard, 1800);
    const t3 = setTimeout(addCard, 3000);
    const t4 = setTimeout(addCard, 4200);

    const interval = setInterval(addCard, streamIntervalMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(interval);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current.clear();
    };
  }, [enabled, addCard, streamIntervalMs]);

  if (!enabled) return null;

  return (
    <div
      className="fixed bottom-8 right-8 w-[360px] h-[200px] z-[9999] pointer-events-none font-sans max-sm:bottom-5 max-sm:right-4 max-sm:left-4 max-sm:w-auto"
    >
      {cards.map((card) => {
        const theme = themeStyles[card.theme] || themeStyles.readometer;
        const posClass = card.exiting
          ? EXITING_STYLE
          : card.entering
          ? ENTERING_STYLE
          : POSITION_STYLES[Math.min(card.position, POSITION_STYLES.length - 1)];

        const exitTransition = card.exiting
          ? 'transition-all duration-500 ease-[cubic-bezier(0.5,0,0.75,0)]'
          : 'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]';

        return (
          <div
            key={card.id}
            className={`group absolute bottom-0 right-0 w-[340px] px-[18px] py-4 rounded-[22px] cursor-pointer pointer-events-auto border-[0.5px] origin-bottom-right will-change-transform backdrop-blur-[40px] backdrop-saturate-[180%] max-sm:w-full hover:!-translate-y-1 hover:!scale-[1.02] ${theme.card} ${exitTransition} ${posClass}`}
          >
            {/* Inner highlight overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_40%,transparent_60%,rgba(255,255,255,0.03)_100%)]" />

            {/* Top shine line */}
            <div className={`pointer-events-none absolute top-0 left-[20%] right-[20%] h-px ${theme.shine}`} />

            {/* Close button (visible on hover) */}
            <button
              aria-label="Dismiss"
              onClick={(e) => {
                e.stopPropagation();
                removeCard(card.id);
              }}
              className="absolute top-2.5 right-3 w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 cursor-pointer"
            >
              ×
            </button>

            {/* Content */}
            <div className="relative z-[1] flex items-center gap-3">
              {/* Icon bubble */}
              <div
                className={`w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 text-[22px] backdrop-blur-[10px] border-[0.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ${theme.icon}`}
              >
                {card.icon}
              </div>

              {/* Text body */}
              <div className="flex-1 min-w-0">
                <div className="text-[13px] leading-[1.4] text-white/95 font-normal">
                  <strong className="font-semibold text-white">{card.name}</strong>
                  {card.city ? ` from ${card.city} ` : ' '}
                  {card.detail}
                </div>
                <div
                  className={`text-[10px] mt-1 tracking-[0.8px] uppercase font-semibold ${theme.meta}`}
                >
                  {card.meta} · just now
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}