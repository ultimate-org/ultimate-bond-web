// 50 dummy moments across three themes: readometer, wordquest, milestone

export type MomentTheme = 'readometer' | 'wordquest' | 'milestone';

export interface Moment {
  theme: MomentTheme;
  name: string;
  city: string;
  detail: string;
  meta: string;
  icon: string;
}

export const MOMENTS_DATA: Moment[] = [
  // ─────────── READ-O-METER (orange/amber) — 20 items ───────────
  { theme: 'readometer', name: 'Aanya',  city: 'Pune',       detail: 'just completed a 25-min reading session', meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Ishaan', city: 'Mumbai',     detail: 'finished 40 minutes of reading today',     meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Riya',   city: 'Bengaluru',  detail: 'read for 30 minutes without a break',      meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Arjun',  city: 'Ahmedabad',  detail: 'finished his first chapter book',          meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Vivaan', city: 'Bengaluru',  detail: 'unlocked a 5-day reading streak',          meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Diya',   city: 'Kolkata',    detail: 'hit a 12-day reading streak',              meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Kiaan',  city: 'Pune',       detail: 'extended his streak to 21 days',           meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Myra',   city: 'Hyderabad',  detail: 'completed 50 reading minutes today',       meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Reyansh', city: 'Chennai',   detail: 'started his 7-day reading streak',         meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Anvi',   city: 'Delhi',      detail: 'read 3 books this week',                   meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Aarav',  city: 'Jaipur',     detail: 'finished a 45-minute reading marathon',    meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Saanvi', city: 'Surat',      detail: 'crossed 30 days of consistent reading',    meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Atharv', city: 'Lucknow',    detail: 'read his first 100-page book',             meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Pari',   city: 'Indore',     detail: 'completed 20 minutes of focused reading',  meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Ayaan',  city: 'Bhopal',     detail: 'extended his streak to 14 days',           meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Avni',   city: 'Nagpur',     detail: 'read 2 chapter books back to back',        meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Krishna', city: 'Coimbatore', detail: 'hit a personal best of 60 minutes',       meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Sia',    city: 'Vadodara',   detail: 'unlocked a 10-day reading streak',         meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Veer',   city: 'Visakhapatnam', detail: 'completed 35 reading minutes today',    meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Tara',   city: 'Patna',      detail: 'finished her bedtime reading goal',        meta: 'Read-O-Meter',          icon: '📚' },

  // ─────────── WORDQUEST (purple/violet) — 20 items ───────────
  { theme: 'wordquest', name: 'Anaya',   city: 'Hyderabad',  detail: 'solved 18 words with 96% accuracy',        meta: 'WordQuest',           icon: '🧩' },
  { theme: 'wordquest', name: 'Sara',    city: 'Chennai',    detail: 'cracked 20 puzzles in a row',              meta: 'WordQuest',           icon: '🧩' },
  { theme: 'wordquest', name: 'Krish',   city: 'Delhi',      detail: 'reached 100% accuracy today',              meta: 'WordQuest · Perfect', icon: '🎯' },
  { theme: 'wordquest', name: 'Rohit',   city: 'Delhi',      detail: "secured Rank #3 in today's challenge",     meta: 'WordQuest · Daily',   icon: '🏆' },
  { theme: 'wordquest', name: 'Meera',   city: 'Pune',       detail: 'reached the WordQuest top 10',             meta: 'WordQuest · Weekly',  icon: '🏆' },
  { theme: 'wordquest', name: 'Tara',    city: 'Mumbai',     detail: 'climbed to Rank #1 this morning',          meta: 'WordQuest · Daily',   icon: '👑' },
  { theme: 'wordquest', name: 'Kabir',   city: 'Chennai',    detail: 'beat his personal best by 12 seconds',     meta: 'WordQuest · PB',      icon: '⚡' },
  { theme: 'wordquest', name: 'Sumit',   city: 'Jaipur',     detail: 'solved 25 words in under 2 minutes',       meta: 'WordQuest · Speed',   icon: '⚡' },
  { theme: 'wordquest', name: 'Navya',   city: 'Bengaluru',  detail: 'cracked the bonus word puzzle',            meta: 'WordQuest',           icon: '🧩' },
  { theme: 'wordquest', name: 'Reyansh', city: 'Kolkata',    detail: 'jumped 5 ranks in the weekly board',       meta: 'WordQuest · Weekly',  icon: '🏆' },
  { theme: 'wordquest', name: 'Ira',     city: 'Ahmedabad',  detail: 'achieved 98% accuracy on hard mode',       meta: 'WordQuest · Perfect', icon: '🎯' },
  { theme: 'wordquest', name: 'Yash',    city: 'Mumbai',     detail: 'solved 30 words in record time',           meta: 'WordQuest · Speed',   icon: '⚡' },
  { theme: 'wordquest', name: 'Ahaan',   city: 'Hyderabad',  detail: 'unlocked the Word Master badge',           meta: 'WordQuest',           icon: '🏅' },
  { theme: 'wordquest', name: 'Mira',    city: 'Pune',       detail: 'reached Rank #2 in the daily challenge',   meta: 'WordQuest · Daily',   icon: '🏆' },
  { theme: 'wordquest', name: 'Aadhya',  city: 'Chennai',    detail: 'beat the leaderboard champion',            meta: 'WordQuest · Weekly',  icon: '👑' },
  { theme: 'wordquest', name: 'Arnav',   city: 'Delhi',      detail: 'completed 15 puzzles without errors',      meta: 'WordQuest · Perfect', icon: '🎯' },
  { theme: 'wordquest', name: 'Aarohi',  city: 'Bengaluru',  detail: 'shaved 8 seconds off her best time',       meta: 'WordQuest · PB',      icon: '⚡' },
  { theme: 'wordquest', name: 'Dhruv',   city: 'Kolkata',    detail: 'cleared all puzzles on hard level',        meta: 'WordQuest',           icon: '🧩' },
  { theme: 'wordquest', name: 'Eva',     city: 'Surat',      detail: 'made it to the top 5 this week',           meta: 'WordQuest · Weekly',  icon: '🏆' },
  { theme: 'wordquest', name: 'Vihaan',  city: 'Mumbai',     detail: 'solved a 7-letter mystery word',           meta: 'WordQuest',           icon: '🧩' },

  // ─────────── MILESTONE (cosmic pink) — 10 items ───────────
  { theme: 'milestone', name: 'The Sharma family', city: '', detail: 'just reached Explorer milestone',          meta: 'Cosmic journey',     icon: '🚀' },
  { theme: 'milestone', name: "Aarav's family",    city: '', detail: 'crossed 100 reading minutes this week',    meta: 'Weekly milestone',   icon: '🎯' },
  { theme: 'milestone', name: 'The Patel family',  city: '', detail: 'unlocked the Navigator milestone',         meta: 'Cosmic journey',     icon: '🌟' },
  { theme: 'milestone', name: 'The Mehta family',  city: '', detail: 'completed their first week together',      meta: 'Family milestone',   icon: '✨' },
  { theme: 'milestone', name: "Diya's family",     city: '', detail: 'reached the Pioneer milestone',            meta: 'Cosmic journey',     icon: '🚀' },
  { theme: 'milestone', name: 'The Iyer family',   city: '', detail: 'crossed 500 total reading minutes',        meta: 'Lifetime milestone', icon: '🏅' },
  { theme: 'milestone', name: 'The Gupta family',  city: '', detail: 'unlocked the Stargazer milestone',         meta: 'Cosmic journey',     icon: '🌟' },
  { theme: 'milestone', name: "Kabir's family",    city: '', detail: 'achieved a 30-day family streak',          meta: 'Family milestone',   icon: '🎯' },
  { theme: 'milestone', name: 'The Reddy family',  city: '', detail: 'reached Astronaut milestone level',        meta: 'Cosmic journey',     icon: '🚀' },
  { theme: 'milestone', name: 'The Singh family',  city: '', detail: 'completed 10 family challenges',           meta: 'Family milestone',   icon: '✨' },
];