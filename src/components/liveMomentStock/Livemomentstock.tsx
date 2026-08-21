'use client';

/**
 * LiveMomentsStack — live "someone just did X" notification stream.
 *
 * CLIENT COMPONENT — dynamic card stream with auto-dismiss and theme support.
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { MOMENTS_DATA, type Moment, type MomentTheme } from './momentsdata';
import { useTheme } from '@/components/theme/ThemeProvider';

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
  /** How long a card stays before auto-dismissing (ms, default 18000) */
  autoRemoveMs?: number;
  /** How often new cards arrive (ms, default 14000) */
  streamIntervalMs?: number;
  /** Delay before the very first card appears (ms, default 800) */
  initialDelayMs?: number;
  /** Disable the stream entirely */
  enabled?: boolean;
}

interface ThemeStyle {
  card: string;
  icon: string;
  meta: string;
  shine: string;
}

// ─── Theme styles (Dark vs Light palettes) ───
const themeStyles: Record<MomentTheme, { dark: ThemeStyle; light: ThemeStyle }> = {
  // ─── Amber / orange family (reading & stories) ───
  readometer: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(239,159,39,0.18)_0%,rgba(180,80,20,0.22)_100%),rgba(40,20,10,0.55)] border-[rgba(250,199,117,0.35)] shadow-[inset_0_1px_0_rgba(255,200,120,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(180,80,20,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(239,159,39,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(250,199,117,0.35),rgba(239,159,39,0.15))] border-[rgba(250,199,117,0.4)]',
      meta: 'text-[#FFC78A]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(255,200,120,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(255,248,240,0.96)_0%,rgba(254,243,199,0.92)_100%)] border-[rgba(245,158,11,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(217,119,6,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,243,199,1),rgba(253,230,138,0.8))] border-[rgba(245,158,11,0.5)]',
      meta: 'text-[#b45309]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)]',
    },
  },
  story: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(255,176,59,0.18)_0%,rgba(193,109,11,0.24)_100%),rgba(38,22,8,0.55)] border-[rgba(255,205,130,0.35)] shadow-[inset_0_1px_0_rgba(255,210,140,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(193,109,11,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(255,176,59,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(255,205,130,0.35),rgba(255,176,59,0.15))] border-[rgba(255,205,130,0.4)]',
      meta: 'text-[#FFD08A]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(255,210,140,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(255,247,237,0.96)_0%,rgba(254,215,170,0.88)_100%)] border-[rgba(249,115,22,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(234,88,12,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,215,170,1),rgba(253,186,116,0.8))] border-[rgba(249,115,22,0.5)]',
      meta: 'text-[#c2410c]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.5),transparent)]',
    },
  },
  casestudy: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(214,158,46,0.18)_0%,rgba(146,99,18,0.24)_100%),rgba(34,26,10,0.55)] border-[rgba(235,200,120,0.35)] shadow-[inset_0_1px_0_rgba(235,205,130,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(146,99,18,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(214,158,46,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(235,200,120,0.35),rgba(214,158,46,0.15))] border-[rgba(235,200,120,0.4)]',
      meta: 'text-[#EBCB86]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(235,205,130,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(254,252,232,0.96)_0%,rgba(254,240,138,0.88)_100%)] border-[rgba(234,179,8,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(202,138,4,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,240,138,1),rgba(253,224,71,0.8))] border-[rgba(234,179,8,0.5)]',
      meta: 'text-[#a16207]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.5),transparent)]',
    },
  },

  // ─── Violet / indigo family (cognitive) ───
  wordquest: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(139,92,246,0.22)_0%,rgba(76,29,149,0.28)_100%),rgba(25,15,50,0.55)] border-[rgba(175,169,236,0.35)] shadow-[inset_0_1px_0_rgba(200,180,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(76,29,149,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(139,92,246,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(175,169,236,0.35),rgba(139,92,246,0.15))] border-[rgba(175,169,236,0.4)]',
      meta: 'text-[#C9C0FF]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(200,180,255,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(245,243,255,0.96)_0%,rgba(221,214,254,0.88)_100%)] border-[rgba(139,92,246,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(124,58,237,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(221,214,254,1),rgba(196,181,253,0.8))] border-[rgba(139,92,246,0.5)]',
      meta: 'text-[#6d28d9]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(139,92,246,0.5),transparent)]',
    },
  },
  kyc: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(124,109,242,0.20)_0%,rgba(55,48,163,0.28)_100%),rgba(20,18,48,0.55)] border-[rgba(170,165,240,0.35)] shadow-[inset_0_1px_0_rgba(190,180,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(55,48,163,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(99,91,255,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(170,165,240,0.35),rgba(99,91,255,0.15))] border-[rgba(170,165,240,0.4)]',
      meta: 'text-[#BFB8FF]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(190,180,255,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(238,242,255,0.96)_0%,rgba(199,210,254,0.88)_100%)] border-[rgba(99,102,241,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(79,70,229,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(199,210,254,1),rgba(165,180,252,0.8))] border-[rgba(99,102,241,0.5)]',
      meta: 'text-[#4338ca]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent)]',
    },
  },
  strengthfinder: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(167,139,250,0.20)_0%,rgba(91,33,182,0.28)_100%),rgba(28,18,52,0.55)] border-[rgba(196,181,253,0.35)] shadow-[inset_0_1px_0_rgba(210,195,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(91,33,182,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(167,139,250,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(196,181,253,0.35),rgba(167,139,250,0.15))] border-[rgba(196,181,253,0.4)]',
      meta: 'text-[#D6C9FF]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(210,195,255,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(250,245,255,0.96)_0%,rgba(233,213,255,0.88)_100%)] border-[rgba(168,85,247,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(147,51,234,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(233,213,255,1),rgba(216,180,254,0.8))] border-[rgba(168,85,247,0.5)]',
      meta: 'text-[#7e22ce]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.5),transparent)]',
    },
  },

  // ─── Pink / magenta family (achievement) ───
  milestone: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(255,122,184,0.18)_0%,rgba(100,30,80,0.25)_100%),rgba(30,15,35,0.55)] border-[rgba(255,180,220,0.35)] shadow-[inset_0_1px_0_rgba(255,200,230,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(100,30,80,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(255,122,184,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(255,180,220,0.35),rgba(255,122,184,0.15))] border-[rgba(255,180,220,0.4)]',
      meta: 'text-[#FFB4DC]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(255,200,230,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(253,242,248,0.96)_0%,rgba(251,207,232,0.88)_100%)] border-[rgba(236,72,153,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(219,39,119,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(251,207,232,1),rgba(244,114,182,0.8))] border-[rgba(236,72,153,0.5)]',
      meta: 'text-[#be185d]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.5),transparent)]',
    },
  },
  portfolio: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(244,114,182,0.18)_0%,rgba(131,24,67,0.25)_100%),rgba(34,14,28,0.55)] border-[rgba(251,182,217,0.35)] shadow-[inset_0_1px_0_rgba(252,200,228,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(131,24,67,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(244,114,182,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(251,182,217,0.35),rgba(244,114,182,0.15))] border-[rgba(251,182,217,0.4)]',
      meta: 'text-[#FBB6D9]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(252,200,228,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(255,241,242,0.96)_0%,rgba(254,205,211,0.88)_100%)] border-[rgba(244,63,94,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(225,29,72,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,205,211,1),rgba(251,113,133,0.8))] border-[rgba(244,63,94,0.5)]',
      meta: 'text-[#be123c]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(244,63,94,0.5),transparent)]',
    },
  },

  // ─── Teal / green family (action & body) ───
  challenge: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(45,212,191,0.18)_0%,rgba(15,118,110,0.26)_100%),rgba(8,32,30,0.55)] border-[rgba(153,228,217,0.35)] shadow-[inset_0_1px_0_rgba(170,235,225,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(15,118,110,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(45,212,191,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(153,228,217,0.35),rgba(45,212,191,0.15))] border-[rgba(153,228,217,0.4)]',
      meta: 'text-[#99E4D9]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(170,235,225,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(240,253,250,0.96)_0%,rgba(153,246,228,0.88)_100%)] border-[rgba(20,184,166,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(13,148,136,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(204,251,241,1),rgba(153,246,228,0.8))] border-[rgba(20,184,166,0.5)]',
      meta: 'text-[#0f766e]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.5),transparent)]',
    },
  },
  habitup_physical: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(52,211,153,0.18)_0%,rgba(6,95,70,0.26)_100%),rgba(8,30,24,0.55)] border-[rgba(150,230,200,0.35)] shadow-[inset_0_1px_0_rgba(165,235,210,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(6,95,70,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(52,211,153,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(150,230,200,0.35),rgba(52,211,153,0.15))] border-[rgba(150,230,200,0.4)]',
      meta: 'text-[#96E6C8]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(165,235,210,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(236,253,245,0.96)_0%,rgba(167,243,208,0.88)_100%)] border-[rgba(16,185,129,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(5,150,105,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(209,250,229,1),rgba(167,243,208,0.8))] border-[rgba(16,185,129,0.5)]',
      meta: 'text-[#047857]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.5),transparent)]',
    },
  },
  activity: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(34,197,94,0.18)_0%,rgba(21,94,52,0.26)_100%),rgba(10,30,18,0.55)] border-[rgba(150,225,175,0.35)] shadow-[inset_0_1px_0_rgba(165,230,185,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(21,94,52,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(34,197,94,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(150,225,175,0.35),rgba(34,197,94,0.15))] border-[rgba(150,225,175,0.4)]',
      meta: 'text-[#96E1AF]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(165,230,185,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(240,253,244,0.96)_0%,rgba(187,247,208,0.88)_100%)] border-[rgba(34,197,94,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(22,163,74,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(220,252,231,1),rgba(187,247,208,0.8))] border-[rgba(34,197,94,0.5)]',
      meta: 'text-[#15803d]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(34,197,94,0.5),transparent)]',
    },
  },

  // ─── Sky / blue family (calm & conversation) ───
  wonderchat: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(56,189,248,0.18)_0%,rgba(7,89,133,0.26)_100%),rgba(8,24,38,0.55)] border-[rgba(160,210,245,0.35)] shadow-[inset_0_1px_0_rgba(170,215,245,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(7,89,133,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(56,189,248,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(160,210,245,0.35),rgba(56,189,248,0.15))] border-[rgba(160,210,245,0.4)]',
      meta: 'text-[#A8D6F5]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(170,215,245,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(240,249,255,0.96)_0%,rgba(186,230,253,0.88)_100%)] border-[rgba(14,165,233,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(2,132,199,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(224,242,254,1),rgba(186,230,253,0.8))] border-[rgba(14,165,233,0.5)]',
      meta: 'text-[#0369a1]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.5),transparent)]',
    },
  },
  habitup_mental: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(96,165,250,0.18)_0%,rgba(30,64,175,0.26)_100%),rgba(12,20,42,0.55)] border-[rgba(170,200,250,0.35)] shadow-[inset_0_1px_0_rgba(180,205,250,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(30,64,175,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(96,165,250,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(170,200,250,0.35),rgba(96,165,250,0.15))] border-[rgba(170,200,250,0.4)]',
      meta: 'text-[#AAC8FA]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(180,205,250,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(239,246,255,0.96)_0%,rgba(191,219,254,0.88)_100%)] border-[rgba(59,130,246,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(37,99,235,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(219,234,254,1),rgba(191,219,254,0.8))] border-[rgba(59,130,246,0.5)]',
      meta: 'text-[#1d4ed8]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.5),transparent)]',
    },
  },

  // ─── Saffron / gold family (spiritual) ───
  shlok: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(251,191,36,0.18)_0%,rgba(180,83,9,0.26)_100%),rgba(36,24,8,0.55)] border-[rgba(253,216,140,0.35)] shadow-[inset_0_1px_0_rgba(253,220,150,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(180,83,9,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(251,191,36,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(253,216,140,0.35),rgba(251,191,36,0.15))] border-[rgba(253,216,140,0.4)]',
      meta: 'text-[#FDD88C]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(253,220,150,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(254,252,232,0.96)_0%,rgba(254,240,138,0.88)_100%)] border-[rgba(245,158,11,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(217,119,6,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,243,199,1),rgba(253,230,138,0.8))] border-[rgba(245,158,11,0.5)]',
      meta: 'text-[#b45309]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)]',
    },
  },
  mudra: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(253,186,116,0.18)_0%,rgba(154,52,18,0.26)_100%),rgba(34,20,10,0.55)] border-[rgba(254,205,160,0.35)] shadow-[inset_0_1px_0_rgba(254,210,170,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(154,52,18,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(253,186,116,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,205,160,0.35),rgba(253,186,116,0.15))] border-[rgba(254,205,160,0.4)]',
      meta: 'text-[#FECDA0]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(254,210,170,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(255,247,237,0.96)_0%,rgba(254,215,170,0.88)_100%)] border-[rgba(249,115,22,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(234,88,12,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,215,170,1),rgba(253,186,116,0.8))] border-[rgba(249,115,22,0.5)]',
      meta: 'text-[#c2410c]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.5),transparent)]',
    },
  },
  parentingvirtue: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(245,158,11,0.18)_0%,rgba(120,53,15,0.26)_100%),rgba(32,22,8,0.55)] border-[rgba(250,200,130,0.35)] shadow-[inset_0_1px_0_rgba(250,205,140,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(120,53,15,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(245,158,11,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(250,200,130,0.35),rgba(245,158,11,0.15))] border-[rgba(250,200,130,0.4)]',
      meta: 'text-[#FAC882]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(250,205,140,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(254,243,199,0.96)_0%,rgba(253,230,138,0.88)_100%)] border-[rgba(245,158,11,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(217,119,6,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(254,243,199,1),rgba(253,230,138,0.8))] border-[rgba(245,158,11,0.5)]',
      meta: 'text-[#b45309]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)]',
    },
  },

  // ─── Lime (everyday chores) ───
  habitup_chores: {
    dark: {
      card: 'bg-[linear-gradient(135deg,rgba(132,204,22,0.18)_0%,rgba(63,98,18,0.26)_100%),rgba(20,30,8,0.55)] border-[rgba(190,225,130,0.35)] shadow-[inset_0_1px_0_rgba(200,230,150,0.3),inset_0_-1px_0_rgba(0,0,0,0.1),0_8px_32px_rgba(63,98,18,0.35),0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(132,204,22,0.12)]',
      icon: 'bg-[linear-gradient(135deg,rgba(190,225,130,0.35),rgba(132,204,22,0.15))] border-[rgba(190,225,130,0.4)]',
      meta: 'text-[#BEE182]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(200,230,150,0.5),transparent)]',
    },
    light: {
      card: 'bg-[linear-gradient(135deg,rgba(247,254,231,0.96)_0%,rgba(217,249,157,0.88)_100%)] border-[rgba(132,204,22,0.45)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_32px_rgba(101,163,13,0.16),0_4px_12px_rgba(0,0,0,0.06)]',
      icon: 'bg-[linear-gradient(135deg,rgba(236,252,203,1),rgba(217,249,157,0.8))] border-[rgba(132,204,22,0.5)]',
      meta: 'text-[#4d7c0f]',
      shine: 'bg-[linear-gradient(90deg,transparent,rgba(132,204,22,0.5),transparent)]',
    },
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
  autoRemoveMs = 18000,
  streamIntervalMs = 14000,
  initialDelayMs = 800,
  enabled = true,
}: LiveMomentsStackProps) {
  const { theme: activeTheme } = useTheme();
  const isLight = activeTheme === 'light';

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

    const seed = setTimeout(addCard, initialDelayMs);
    const interval = setInterval(addCard, streamIntervalMs);

    return () => {
      clearTimeout(seed);
      clearInterval(interval);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current.clear();
    };
  }, [enabled, addCard, streamIntervalMs, initialDelayMs]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-8 right-8 w-[360px] h-[200px] z-[9999] overflow-hidden pointer-events-none font-sans max-sm:bottom-5 max-sm:right-4 max-sm:left-4 max-sm:w-auto">
      {cards.map((card) => {
        const themePair = themeStyles[card.theme] || themeStyles.readometer;
        const theme = isLight ? themePair.light : themePair.dark;
        const posClass = card.exiting
          ? EXITING_STYLE
          : card.entering
          ? ENTERING_STYLE
          : POSITION_STYLES[Math.min(card.position, POSITION_STYLES.length - 1)];

        const exitTransition = card.exiting
          ? 'transition-all duration-500 ease-in-soft'
          : 'transition-all duration-500 ease-spring';

        return (
          <div
            key={card.id}
            className={`group absolute bottom-0 right-0 w-[340px] px-[18px] py-4 rounded-[22px] cursor-pointer pointer-events-auto border-[0.5px] origin-bottom-right will-change-transform backdrop-blur-[40px] backdrop-saturate-[180%] max-sm:w-full hover:!-translate-y-1 hover:!scale-[1.02] ${theme.card} ${exitTransition} ${posClass}`}
          >
            {/* Inner highlight overlay */}
            <div
              className={`pointer-events-none absolute inset-0 rounded-[22px] ${
                isLight
                  ? 'bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_40%,transparent_60%,rgba(255,255,255,0.2)_100%)]'
                  : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_40%,transparent_60%,rgba(255,255,255,0.03)_100%)]'
              }`}
            />

            {/* Top shine line */}
            <div className={`pointer-events-none absolute top-0 left-[20%] right-[20%] h-px ${theme.shine}`} />

            {/* Close button (visible on hover) */}
            <button
              aria-label="Dismiss"
              onClick={(e) => {
                e.stopPropagation();
                removeCard(card.id);
              }}
              className={`absolute top-2.5 right-3 w-5 h-5 rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 cursor-pointer ${
                isLight
                  ? 'bg-slate-200/80 hover:bg-slate-300 text-slate-600 hover:text-slate-900'
                  : 'bg-white/10 hover:bg-white/20 text-white/60 hover:text-white'
              }`}
            >
              ×
            </button>

            {/* Content */}
            <div className="relative z-[1] flex items-center gap-3">
              {/* Icon bubble */}
              <div
                className={`w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 text-[22px] backdrop-blur-[10px] border-[0.5px] ${
                  isLight
                    ? 'shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.05)]'
                    : 'shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]'
                } ${theme.icon}`}
              >
                {card.icon}
              </div>

              {/* Text body */}
              <div className="flex-1 min-w-0">
                <div
                  className={`text-[13px] leading-[1.4] font-normal ${
                    isLight ? 'text-slate-700' : 'text-white/95'
                  }`}
                >
                  <strong className={`font-semibold ${isLight ? 'text-slate-950 font-bold' : 'text-white'}`}>
                    {card.name}
                  </strong>
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