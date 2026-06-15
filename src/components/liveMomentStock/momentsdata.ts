// 50 dummy moments across three themes: readometer, wordquest, milestone

export type MomentTheme = 'readometer' | 'wordquest' | 'milestone' | 'kyc' | 'wonderchat' | 'challenge' | 'story' |'portfolio'|'strengthfinder'|'activity'|'shlok'|'mudra'|'parentingvirtue'|'casestudy' |'habitup_chores'|'habitup_mental' | 'habitup_physical';

export interface Moment {
  theme: MomentTheme;
  name: string;
  city: string;
  detail: string;
  meta: string;
  icon: string;
}

export const MOMENTS_DATA: Moment[] = [

  // ===== KYC — Know Your Child (20) :: parent learns a lesser-known child-development fact =====
  { theme: 'kyc', name: 'Aarav & his mom',      city: 'Delhi',      detail: 'learned why 7 year olds suddenly argue more', meta: 'Know Your Child', icon: '🧠' },
  { theme: 'kyc', name: 'The Iyer family',      city: 'Chennai',    detail: 'discovered why kids stop sharing feelings',  meta: 'Know Your Child', icon: '💡' },
  { theme: 'kyc', name: 'Sneha & her dad',      city: 'Bengaluru',  detail: 'learned how praise can backfire on kids',    meta: 'Know Your Child', icon: '🧩' },
  { theme: 'kyc', name: 'The Banerjee family',  city: 'Kolkata',    detail: 'found out what screen tantrums really mean',  meta: 'Know Your Child', icon: '🧠' },
  { theme: 'kyc', name: 'Hetvi & her mom',      city: 'Ahmedabad',  detail: 'learned why boredom is good for the brain',  meta: 'Know Your Child', icon: '💡' },
  { theme: 'kyc', name: 'Reyansh & his dad',    city: 'Lucknow',    detail: 'discovered why kids ask why so often',       meta: 'Know Your Child', icon: '🧠' },
  { theme: 'kyc', name: 'The Patil family',     city: 'Pune',       detail: 'learned how sleep shapes a childs mood',     meta: 'Know Your Child', icon: '🌙' },
  { theme: 'kyc', name: 'Diya & her parents',   city: 'Surat',      detail: 'found out why kids fear making mistakes',    meta: 'Know Your Child', icon: '💡' },
  { theme: 'kyc', name: 'Karthik & his mom',    city: 'Coimbatore', detail: 'learned why comparison hurts confidence',    meta: 'Know Your Child', icon: '🧩' },
  { theme: 'kyc', name: 'The Reddy family',     city: 'Hyderabad',  detail: 'discovered how play builds real life skills', meta: 'Know Your Child', icon: '🧠' },
  { theme: 'kyc', name: 'Gurnoor & her dad',    city: 'Chandigarh', detail: 'learned why kids need to feel heard first',  meta: 'Know Your Child', icon: '💡' },
  { theme: 'kyc', name: 'The Nair family',      city: 'Kochi',      detail: 'found out why routines calm anxious kids',   meta: 'Know Your Child', icon: '🌙' },
  { theme: 'kyc', name: 'Ananya & her mom',     city: 'Delhi',      detail: 'learned how emotions shape memory in kids',  meta: 'Know Your Child', icon: '🧠' },
  { theme: 'kyc', name: 'The Shah family',      city: 'Ahmedabad',  detail: 'discovered why kids copy what parents do',   meta: 'Know Your Child', icon: '💡' },
  { theme: 'kyc', name: 'Atharva & his dad',    city: 'Nagpur',     detail: 'learned why saying no the right way matters', meta: 'Know Your Child', icon: '🧩' },
  { theme: 'kyc', name: 'The Sengupta family',  city: 'Kolkata',    detail: 'found out how curiosity fuels learning',     meta: 'Know Your Child', icon: '🧠' },
  { theme: 'kyc', name: 'Saumya & her mom',     city: 'Lucknow',    detail: 'learned why kids melt down after school',    meta: 'Know Your Child', icon: '🌙' },
  { theme: 'kyc', name: 'The Rao family',       city: 'Bengaluru',  detail: 'discovered how to spot hidden child stress', meta: 'Know Your Child', icon: '💡' },
  { theme: 'kyc', name: 'Manan & his parents',  city: 'Surat',      detail: 'learned why kids need unstructured time',    meta: 'Know Your Child', icon: '🧩' },
  { theme: 'kyc', name: 'The Joshi family',     city: 'Pune',       detail: 'found out why labels stick to young kids',   meta: 'Know Your Child', icon: '🧠' },

  // ===== WonderChat (20) :: weekly parent-child conversation =====
  { theme: 'wonderchat', name: 'Ishani & her parents',  city: 'Kolkata',    detail: 'opened up about their day in WonderChat',    meta: 'WonderChat',             icon: '💬' },
  { theme: 'wonderchat', name: 'Vivaan & his mom',      city: 'Delhi',      detail: 'gave this weeks WonderChat a big thumbs up', meta: 'WonderChat',             icon: '👍' },
  { theme: 'wonderchat', name: 'The Iyer family',       city: 'Chennai',    detail: 'had their longest WonderChat talk yet',      meta: 'WonderChat',             icon: '💬' },
  { theme: 'wonderchat', name: 'Sai & his dad',         city: 'Hyderabad',  detail: 'finally talked about a tough school day',    meta: 'WonderChat · Real talk', icon: '🗣️' },
  { theme: 'wonderchat', name: 'The Patel family',      city: 'Ahmedabad',  detail: 'shared three things they felt grateful for', meta: 'WonderChat',             icon: '❤️' },
  { theme: 'wonderchat', name: 'Aditi & her mom',       city: 'Lucknow',    detail: 'opened up about a friendship worry',         meta: 'WonderChat · Real talk', icon: '💬' },
  { theme: 'wonderchat', name: 'The Shetty family',     city: 'Bengaluru',  detail: 'wrapped up their 5th WonderChat this month', meta: 'WonderChat · Streak',    icon: '🔥' },
  { theme: 'wonderchat', name: 'Harleen & her dad',     city: 'Chandigarh', detail: 'laughed through their WonderChat tonight',   meta: 'WonderChat',             icon: '😄' },
  { theme: 'wonderchat', name: 'The Nair family',       city: 'Kochi',      detail: 'gave their weekly chat a happy thumbs up',   meta: 'WonderChat',             icon: '👍' },
  { theme: 'wonderchat', name: 'Atharva & his parents', city: 'Pune',       detail: 'talked about feelings for the first time',   meta: 'WonderChat · Real talk', icon: '💬' },
  { theme: 'wonderchat', name: 'Sreeja & her mom',      city: 'Hyderabad',  detail: 'shared a secret she had kept for weeks',     meta: 'WonderChat',             icon: '❤️' },
  { theme: 'wonderchat', name: 'The Bose family',       city: 'Kolkata',    detail: 'never missed a WonderChat in 4 weeks',       meta: 'WonderChat · Streak',    icon: '🔥' },
  { theme: 'wonderchat', name: 'Yash & his dad',        city: 'Indore',     detail: 'talked about his big worry before exams',    meta: 'WonderChat · Real talk', icon: '🗣️' },
  { theme: 'wonderchat', name: 'The Mehta family',      city: 'Ahmedabad',  detail: 'loved this weeks WonderChat question',       meta: 'WonderChat',             icon: '💬' },
  { theme: 'wonderchat', name: 'Keerthana & her mom',   city: 'Coimbatore', detail: 'opened up about feeling left out',           meta: 'WonderChat · Real talk', icon: '💬' },
  { theme: 'wonderchat', name: 'The Khanna family',     city: 'Delhi',      detail: 'gave their chat two thumbs up tonight',      meta: 'WonderChat',             icon: '👍' },
  { theme: 'wonderchat', name: 'Tejas & his parents',   city: 'Bengaluru',  detail: 'shared the best part of their week',         meta: 'WonderChat',             icon: '❤️' },
  { theme: 'wonderchat', name: 'Rupsa & her dad',       city: 'Kolkata',    detail: 'talked openly about a fear of the dark',     meta: 'WonderChat · Real talk', icon: '💬' },
  { theme: 'wonderchat', name: 'The Deshmukh family',   city: 'Nagpur',     detail: 'hit 10 WonderChats together',                meta: 'WonderChat · Streak',    icon: '🔥' },
  { theme: 'wonderchat', name: 'Saanvi & her mom',      city: 'Surat',      detail: 'finally said what was bothering her',        meta: 'WonderChat · Real talk', icon: '💬' },

  // ===== Challenge (20) :: family challenges =====
  { theme: 'challenge', name: 'The Reddy family',     city: 'Hyderabad',  detail: 'finished a 4 day Phoneless Dinner streak',  meta: 'Challenge · No phones', icon: '📵' },
  { theme: 'challenge', name: 'The Sharma family',    city: 'Delhi',      detail: 'completed their first No Reels Day',        meta: 'Challenge',             icon: '🚫' },
  { theme: 'challenge', name: 'The Kulkarni family',  city: 'Pune',       detail: 'aced a full Screen free Sunday',            meta: 'Challenge',             icon: '🌳' },
  { theme: 'challenge', name: 'Hari & his dad',       city: 'Chennai',    detail: 'cleared a 7 day No Phone Hour challenge',   meta: 'Challenge · Streak',    icon: '🔥' },
  { theme: 'challenge', name: 'The Shah family',      city: 'Ahmedabad',  detail: 'wrapped up a week of Phoneless Dinners',    meta: 'Challenge · No phones', icon: '📵' },
  { theme: 'challenge', name: 'The Gill family',      city: 'Chandigarh', detail: 'took on the No Reels Day challenge again',  meta: 'Challenge',             icon: '🚫' },
  { theme: 'challenge', name: 'Devika & her mom',     city: 'Kochi',      detail: 'joined the family Kindness Week challenge', meta: 'Challenge',             icon: '🙌' },
  { theme: 'challenge', name: 'The Bose family',      city: 'Kolkata',    detail: 'finished a 5 day No Sugar day challenge',   meta: 'Challenge · Streak',    icon: '🌳' },
  { theme: 'challenge', name: 'The Patil family',     city: 'Mumbai',     detail: 'nailed 3 Phoneless Dinners in a row',       meta: 'Challenge · No phones', icon: '📵' },
  { theme: 'challenge', name: 'Yuvraj & his dad',     city: 'Jaipur',     detail: 'completed a Digital Detox weekend',         meta: 'Challenge',             icon: '📵' },
  { theme: 'challenge', name: 'The Rao family',       city: 'Bengaluru',  detail: 'crossed 6 days of the Reading Hour challenge', meta: 'Challenge · Streak',  icon: '📚' },
  { theme: 'challenge', name: 'The Verma family',     city: 'Lucknow',    detail: 'won this weeks No Reels Day challenge',      meta: 'Challenge',             icon: '🚫' },
  { theme: 'challenge', name: 'Anvita & her parents', city: 'Hyderabad',  detail: 'took the No Sugar Week challenge together',  meta: 'Challenge',             icon: '🍎' },
  { theme: 'challenge', name: 'The Menon family',     city: 'Kochi',      detail: 'finished a 4 day Phoneless Dinner run',     meta: 'Challenge · No phones', icon: '📵' },
  { theme: 'challenge', name: 'The Agarwal family',   city: 'Jaipur',     detail: 'completed a family Gratitude Week',         meta: 'Challenge',             icon: '🙏' },
  { theme: 'challenge', name: 'Surya & his dad',      city: 'Coimbatore', detail: 'cleared a 3 day Screen free streak',        meta: 'Challenge · Streak',    icon: '🔥' },
  { theme: 'challenge', name: 'The Chopra family',    city: 'Delhi',      detail: 'took on a No Phone at Meals challenge',     meta: 'Challenge · No phones', icon: '📵' },
  { theme: 'challenge', name: 'The Desai family',     city: 'Surat',      detail: 'finished their first Outdoor Hour challenge', meta: 'Challenge',           icon: '🌳' },
  { theme: 'challenge', name: 'Chaitra & her mom',    city: 'Bengaluru',  detail: 'joined the No Reels Day challenge',         meta: 'Challenge',             icon: '🚫' },
  { theme: 'challenge', name: 'The Deshpande family', city: 'Nagpur',     detail: 'hit a 5 day Phoneless Dinner streak',       meta: 'Challenge · Streak',    icon: '📵' },

  // ===== Story (20) :: real story titles =====
  { theme: 'story', name: 'Ananya',  city: 'Delhi',      detail: 'gave 5 stars to The Magic Pot',       meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Karthik', city: 'Chennai',    detail: 'finished reading Courage Of Madhav',  meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Rik',     city: 'Kolkata',    detail: 'loved the story Lost and found',      meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Hetvi',   city: 'Ahmedabad',  detail: 'rated The Lost Necklace 5 stars',     meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Atharva', city: 'Pune',       detail: 'read Chatterbox Arjun twice',         meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Sai',     city: 'Hyderabad',  detail: 'gave 5 stars to The Secret Recipe',   meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Devika',  city: 'Kochi',      detail: 'finished Suha Learns To Swim',        meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Gurnoor', city: 'Chandigarh', detail: 'loved the story Jungle Safari',       meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Aditi',   city: 'Lucknow',    detail: 'gave 5 stars to A true leader',       meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Tejas',   city: 'Bengaluru',  detail: 'read The golden ring at bedtime',     meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Saanvi',  city: 'Surat',      detail: 'rated Ruhi learns to read 5 stars',   meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Vivaan',  city: 'Delhi',      detail: 'finished Power of Sacrifice today',   meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Harini',  city: 'Hyderabad',  detail: 'gave 5 stars to The Changed Thief',   meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Onkar',   city: 'Pune',       detail: 'loved reading Rohan And Chiku',       meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Ishani',  city: 'Kolkata',    detail: 'read Vishu the fussy eater again',    meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Manan',   city: 'Ahmedabad',  detail: 'gave 5 stars to Lord Ganesh And Mango', meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Surya',   city: 'Coimbatore', detail: 'finished Ishwarpuram in one go',      meta: 'Story',            icon: '📖' },
  { theme: 'story', name: 'Naina',   city: 'Indore',     detail: 'loved the story My Best Friend',      meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Aravind', city: 'Chennai',    detail: 'rated The Friendship Club 5 stars',   meta: 'Story · Loved it', icon: '⭐' },
  { theme: 'story', name: 'Yuvraj',  city: 'Jaipur',     detail: 'read Use the time wisely twice',      meta: 'Story',            icon: '📖' },

  // ===== Read-O-Meter (17) :: reading minutes / streaks =====
  { theme: 'readometer', name: 'Riya',      city: 'Ahmedabad',  detail: 'read for 30 minutes without a break',     meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Karthik',   city: 'Chennai',    detail: 'crossed 200 minutes of reading this week', meta: 'Read-O-Meter',         icon: '📖' },
  { theme: 'readometer', name: 'Sourav',    city: 'Kolkata',    detail: 'hit a 30 day reading streak',             meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Sneha',     city: 'Bengaluru',  detail: 'read 45 minutes before bedtime',          meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Dhruv',     city: 'Surat',      detail: 'finished his 10th book this month',       meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Aditi',     city: 'Lucknow',    detail: 'logged 120 minutes of reading this week', meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Hari',      city: 'Chennai',    detail: 'kept a 14 day reading streak going',      meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Anvita',    city: 'Hyderabad',  detail: 'read for an hour straight today',         meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Manraj',    city: 'Chandigarh', detail: 'beat his weekly reading record',          meta: 'Read-O-Meter',          icon: '🏅' },
  { theme: 'readometer', name: 'Nandana',   city: 'Kochi',      detail: 'crossed 500 reading minutes total',       meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Sayli',     city: 'Nagpur',     detail: 'read every day for two weeks',            meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Vihaan',    city: 'Delhi',      detail: 'read 40 minutes after school',            meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Keerthana', city: 'Coimbatore', detail: 'finished 3 books this week',              meta: 'Read-O-Meter',          icon: '📚' },
  { theme: 'readometer', name: 'Jainam',    city: 'Ahmedabad',  detail: 'hit 25 minutes of reading today',         meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Aritra',    city: 'Kolkata',    detail: 'reached a 21 day reading streak',         meta: 'Read-O-Meter · Streak', icon: '🔥' },
  { theme: 'readometer', name: 'Pranav',    city: 'Bengaluru',  detail: 'read 90 minutes over the weekend',        meta: 'Read-O-Meter',          icon: '📖' },
  { theme: 'readometer', name: 'Mahi',      city: 'Jaipur',     detail: 'logged her best reading week yet',        meta: 'Read-O-Meter',          icon: '🏅' },

  // ===== WordQuest (17) :: accuracy / badges / streaks / rank =====
  { theme: 'wordquest', name: 'Anaya',    city: 'Hyderabad',  detail: 'solved 18 words with 96% accuracy', meta: 'WordQuest',           icon: '🧩' },
  { theme: 'wordquest', name: 'Krish',    city: 'Indore',     detail: 'reached 100% accuracy today',       meta: 'WordQuest · Perfect', icon: '🎯' },
  { theme: 'wordquest', name: 'Ahaan',    city: 'Hyderabad',  detail: 'unlocked the Word Master badge',    meta: 'WordQuest',           icon: '🏅' },
  { theme: 'wordquest', name: 'Sneha',    city: 'Bengaluru',  detail: 'solved WordQuest 5 days in a row',  meta: 'WordQuest · Streak',  icon: '🔥' },
  { theme: 'wordquest', name: 'Aravind',  city: 'Chennai',    detail: 'cracked 20 words in record time',   meta: 'WordQuest',           icon: '🎯' },
  { theme: 'wordquest', name: 'Heer',     city: 'Surat',      detail: 'hit a 10 day WordQuest streak',     meta: 'WordQuest · Streak',  icon: '🔥' },
  { theme: 'wordquest', name: 'Reyansh',  city: 'Lucknow',    detail: 'scored a perfect round today',      meta: 'WordQuest · Perfect', icon: '🎯' },
  { theme: 'wordquest', name: 'Ananya',   city: 'Kolkata',    detail: 'climbed into the Top 10 solvers',   meta: 'WordQuest · Rank',    icon: '🏆' },
  { theme: 'wordquest', name: 'Jasmeet',  city: 'Chandigarh', detail: 'earned the Speed Solver badge',     meta: 'WordQuest',           icon: '🏅' },
  { theme: 'wordquest', name: 'Hari',     city: 'Chennai',    detail: 'solved 25 words without a hint',    meta: 'WordQuest',           icon: '🎯' },
  { theme: 'wordquest', name: 'Teja',     city: 'Hyderabad',  detail: 'kept a 7 day WordQuest streak',     meta: 'WordQuest · Streak',  icon: '🔥' },
  { theme: 'wordquest', name: 'Mukta',    city: 'Mumbai',     detail: 'beat her best WordQuest score',     meta: 'WordQuest',           icon: '🏅' },
  { theme: 'wordquest', name: 'Aryan',    city: 'Jaipur',     detail: 'reached 98% accuracy this week',     meta: 'WordQuest',           icon: '🎯' },
  { theme: 'wordquest', name: 'Devika',   city: 'Kochi',      detail: 'unlocked a brand new word streak',  meta: 'WordQuest · Streak',  icon: '🔥' },
  { theme: 'wordquest', name: 'Soham',    city: 'Pune',       detail: 'solved every word correctly today', meta: 'WordQuest · Perfect', icon: '🎯' },
  { theme: 'wordquest', name: 'Harini',   city: 'Hyderabad',  detail: 'made the Top 5 solver list',        meta: 'WordQuest · Rank',    icon: '🏆' },
  { theme: 'wordquest', name: 'Vanshika', city: 'Jaipur',     detail: 'earned her first Word Master badge', meta: 'WordQuest',          icon: '🏅' },

  // ===== Milestone (16) :: Pathfinder -> Explorer -> Navigator -> Bond Builder =====
  { theme: 'milestone', name: 'The Sharma family',   city: 'Delhi',      detail: 'just reached the Explorer milestone',     meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Iyer family',     city: 'Chennai',    detail: 'rocketed up to the Navigator stage',      meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Banerjee family', city: 'Kolkata',    detail: 'unlocked the Bond Builder milestone',     meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Patel family',    city: 'Ahmedabad',  detail: 'started their journey as Pathfinders',    meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Reddy family',    city: 'Hyderabad',  detail: 'reached the Explorer milestone today',    meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Nair family',     city: 'Kochi',      detail: 'leveled up to the Navigator stage',       meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Kulkarni family', city: 'Pune',       detail: 'became Bond Builders this week',          meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Gill family',     city: 'Chandigarh', detail: 'fuelled up to reach Explorer',            meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Rao family',      city: 'Bengaluru',  detail: 'crossed into the Navigator milestone',    meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Shah family',     city: 'Surat',      detail: 'launched their Pathfinder journey',       meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Verma family',    city: 'Lucknow',    detail: 'reached the Explorer stage in record time', meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Menon family',    city: 'Kochi',      detail: 'unlocked Bond Builder together',          meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Deshmukh family', city: 'Nagpur',     detail: 'moved up to the Navigator stage',         meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Agarwal family',  city: 'Jaipur',     detail: 'just became proud Pathfinders',           meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Shetty family',   city: 'Bengaluru',  detail: 'reached the Explorer milestone',          meta: 'Cosmic journey', icon: '🚀' },
  { theme: 'milestone', name: 'The Chopra family',   city: 'Delhi',      detail: 'rocketed into the Bond Builder stage',    meta: 'Cosmic journey', icon: '🚀' },

  // ===== Portfolio (10) :: achievement uploads =====
  { theme: 'portfolio', name: 'Hetvi',     city: 'Ahmedabad',  detail: 'added a new karate medal to her Portfolio', meta: 'Portfolio', icon: '🎖️' },
  { theme: 'portfolio', name: 'Aarav',     city: 'Delhi',      detail: 'uploaded his first chess trophy',           meta: 'Portfolio', icon: '🏆' },
  { theme: 'portfolio', name: 'Ishani',    city: 'Kolkata',    detail: 'added a painting to her Portfolio',         meta: 'Portfolio', icon: '🖼️' },
  { theme: 'portfolio', name: 'Sai',       city: 'Hyderabad',  detail: 'uploaded a swimming gold medal',            meta: 'Portfolio', icon: '🥇' },
  { theme: 'portfolio', name: 'Devika',    city: 'Kochi',      detail: 'added her dance certificate',               meta: 'Portfolio', icon: '🎖️' },
  { theme: 'portfolio', name: 'Yash',      city: 'Indore',     detail: 'uploaded his science fair win',             meta: 'Portfolio', icon: '🏆' },
  { theme: 'portfolio', name: 'Keerthana', city: 'Coimbatore', detail: 'added a music exam certificate',            meta: 'Portfolio', icon: '🎖️' },
  { theme: 'portfolio', name: 'Manraj',    city: 'Chandigarh', detail: 'uploaded his football trophy',              meta: 'Portfolio', icon: '🏆' },
  { theme: 'portfolio', name: 'Sayli',     city: 'Nagpur',     detail: 'added her best artwork yet',                meta: 'Portfolio', icon: '🖼️' },
  { theme: 'portfolio', name: 'Pranav',    city: 'Bengaluru',  detail: 'uploaded a quiz champion badge',            meta: 'Portfolio', icon: '🥇' },

  // ===== StrengthFinder (10) :: discover strengths =====
  { theme: 'strengthfinder', name: 'Myra',      city: 'Mumbai',     detail: 'discovered Curiosity as her top strength', meta: 'StrengthFinder', icon: '💎' },
  { theme: 'strengthfinder', name: 'Arnav',     city: 'Lucknow',    detail: 'found Creativity is his superpower',       meta: 'StrengthFinder', icon: '🌟' },
  { theme: 'strengthfinder', name: 'Chaitra',   city: 'Bengaluru',  detail: 'unlocked Kindness as a top strength',      meta: 'StrengthFinder', icon: '💎' },
  { theme: 'strengthfinder', name: 'Hari',      city: 'Chennai',    detail: 'discovered his gift for Leadership',       meta: 'StrengthFinder', icon: '⭐' },
  { theme: 'strengthfinder', name: 'Diya',      city: 'Surat',      detail: 'found Empathy among her strengths',        meta: 'StrengthFinder', icon: '💎' },
  { theme: 'strengthfinder', name: 'Atharva',   city: 'Pune',       detail: 'discovered Perseverance is his strength',  meta: 'StrengthFinder', icon: '🌟' },
  { theme: 'strengthfinder', name: 'Rupsa',     city: 'Kolkata',    detail: 'unlocked Humour as her top trait',         meta: 'StrengthFinder', icon: '⭐' },
  { theme: 'strengthfinder', name: 'Yuvraj',    city: 'Jaipur',     detail: 'found Bravery is his core strength',       meta: 'StrengthFinder', icon: '💎' },
  { theme: 'strengthfinder', name: 'Nandana',   city: 'Kochi',      detail: 'discovered her strength is Teamwork',      meta: 'StrengthFinder', icon: '🌟' },
  { theme: 'strengthfinder', name: 'Manan',     city: 'Ahmedabad',  detail: 'unlocked Honesty as a top strength',       meta: 'StrengthFinder', icon: '⭐' },

  // ===== Activities (7) :: real activity titles =====
  { theme: 'activity', name: 'Soham',   city: 'Pune',      detail: 'enjoyed the Bird Calls activity',        meta: 'Activities',           icon: '🎨' },
  { theme: 'activity', name: 'Ananya',  city: 'Delhi',     detail: 'tried the Morse Code activity today',    meta: 'Activities',           icon: '🎨' },
  { theme: 'activity', name: 'Sai',     city: 'Hyderabad', detail: 'loved the Solar Oven At Home activity',  meta: 'Activities',           icon: '🎨' },
  { theme: 'activity', name: 'Devika',  city: 'Kochi',     detail: 'completed the Charity Project activity', meta: 'Activities · Together', icon: '🤝' },
  { theme: 'activity', name: 'Rik',     city: 'Kolkata',   detail: 'finished the Dream Diary activity',      meta: 'Activities',           icon: '🎨' },
  { theme: 'activity', name: 'Hetvi',   city: 'Ahmedabad', detail: 'enjoyed a Stargazing Meditation',        meta: 'Activities · Mindful',  icon: '✨' },
  { theme: 'activity', name: 'Karthik', city: 'Chennai',   detail: 'tried the Cloud Kitchen activity',       meta: 'Activities',           icon: '🎨' },

  // ===== Case Studies (7) :: real case study titles =====
  { theme: 'casestudy', name: 'Vivaan',  city: 'Delhi',     detail: 'explored the UPI case study',           meta: 'Case Studies', icon: '💡' },
  { theme: 'casestudy', name: 'Harini',  city: 'Hyderabad', detail: 'learned about ISRO Mangalyaan',         meta: 'Case Studies', icon: '🚀' },
  { theme: 'casestudy', name: 'Aravind', city: 'Chennai',   detail: 'explored the Tata Nano case study',     meta: 'Case Studies', icon: '💡' },
  { theme: 'casestudy', name: 'Ishani',  city: 'Kolkata',   detail: 'learned about Dashrath Manjhi',         meta: 'Case Studies', icon: '⛰️' },
  { theme: 'casestudy', name: 'Manan',   city: 'Ahmedabad', detail: 'explored the Mumbai Dabbawalas story',  meta: 'Case Studies', icon: '💡' },
  { theme: 'casestudy', name: 'Onkar',   city: 'Pune',      detail: 'learned about APJ Abdul Kalam',         meta: 'Case Studies', icon: '🌟' },
  { theme: 'casestudy', name: 'Sneha',   city: 'Bengaluru', detail: 'explored the Akshaya Patra mission',    meta: 'Case Studies', icon: '🍲' },

  // ===== Shlok (6) =====
  { theme: 'shlok', name: 'Advait',  city: 'Pune',      detail: 'learnt his fifth Shlok by heart',     meta: 'Shlok',          icon: '🕉️' },
  { theme: 'shlok', name: 'Saanvi',  city: 'Surat',     detail: 'recited a new Shlok perfectly',       meta: 'Shlok',          icon: '🕉️' },
  { theme: 'shlok', name: 'Karthik', city: 'Chennai',   detail: 'mastered three Shloks this week',     meta: 'Shlok',          icon: '🪔' },
  { theme: 'shlok', name: 'Ananya',  city: 'Delhi',     detail: 'learnt the Gayatri Shlok today',      meta: 'Shlok',          icon: '🕉️' },
  { theme: 'shlok', name: 'Atharva', city: 'Nagpur',    detail: 'recited his 10th Shlok by heart',     meta: 'Shlok',          icon: '🪔' },
  { theme: 'shlok', name: 'Harini',  city: 'Hyderabad', detail: 'kept a 7 day Shlok practice streak',  meta: 'Shlok · Streak', icon: '🔥' },

  // ===== Mudra (6) :: video-guided mindfulness =====
  { theme: 'mudra', name: 'Meenakshi', city: 'Chennai',   detail: 'practised five calming Mudras today', meta: 'Mudra · Mindful', icon: '🧘' },
  { theme: 'mudra', name: 'Diya',      city: 'Ahmedabad', detail: 'followed a new Mudra video',          meta: 'Mudra',           icon: '🪷' },
  { theme: 'mudra', name: 'Sneha',     city: 'Bengaluru', detail: 'finished a guided Mudra session',     meta: 'Mudra · Mindful', icon: '🧘' },
  { theme: 'mudra', name: 'Rupsa',     city: 'Kolkata',   detail: 'learnt three new calming Mudras',     meta: 'Mudra',           icon: '🤲' },
  { theme: 'mudra', name: 'Sayli',     city: 'Pune',      detail: 'practised Mudras for 10 minutes',     meta: 'Mudra · Mindful', icon: '🧘' },
  { theme: 'mudra', name: 'Nandana',   city: 'Kochi',     detail: 'kept a 5 day Mudra practice streak',  meta: 'Mudra · Streak',  icon: '🔥' },

  // ===== Habit Up — Physical (6) =====
  { theme: 'habitup_physical', name: 'Kabir',  city: 'Delhi',     detail: 'finished 7 days of morning stretches', meta: 'Habit Up · Physical', icon: '💪' },
  { theme: 'habitup_physical', name: 'Hari',   city: 'Chennai',   detail: 'kept a 10 day exercise streak',        meta: 'Habit Up · Physical', icon: '🏃' },
  { theme: 'habitup_physical', name: 'Aryan',  city: 'Jaipur',    detail: 'did his daily workout all week',       meta: 'Habit Up · Physical', icon: '💪' },
  { theme: 'habitup_physical', name: 'Pranav', city: 'Bengaluru', detail: 'completed 30 days of yoga',            meta: 'Habit Up · Physical', icon: '🤸' },
  { theme: 'habitup_physical', name: 'Dhruv',  city: 'Surat',     detail: 'jogged every morning this week',       meta: 'Habit Up · Physical', icon: '🏃' },
  { theme: 'habitup_physical', name: 'Onkar',  city: 'Pune',      detail: 'hit a 14 day fitness streak',          meta: 'Habit Up · Physical', icon: '💪' },

  // ===== Habit Up — Mental (6) =====
  { theme: 'habitup_mental', name: 'Sara',     city: 'Mumbai',     detail: 'kept a 10 day gratitude streak',     meta: 'Habit Up · Mental', icon: '🧠' },
  { theme: 'habitup_mental', name: 'Ishani',   city: 'Kolkata',    detail: 'journaled her feelings all week',    meta: 'Habit Up · Mental', icon: '📝' },
  { theme: 'habitup_mental', name: 'Teja',     city: 'Hyderabad',  detail: 'practised deep breathing daily',     meta: 'Habit Up · Mental', icon: '🌬️' },
  { theme: 'habitup_mental', name: 'Mahi',     city: 'Jaipur',     detail: 'finished 7 days of mindfulness',     meta: 'Habit Up · Mental', icon: '🧠' },
  { theme: 'habitup_mental', name: 'Aniruddh', city: 'Bengaluru',  detail: 'kept a calm mind journal for a week', meta: 'Habit Up · Mental', icon: '📝' },
  { theme: 'habitup_mental', name: 'Devika',   city: 'Kochi',      detail: 'did daily gratitude for 14 days',    meta: 'Habit Up · Mental', icon: '🧠' },

  // ===== Habit Up — Chores (6) =====
  { theme: 'habitup_chores', name: 'Aryan',     city: 'Delhi',      detail: 'tidied his room 6 days in a row',    meta: 'Habit Up · Chores', icon: '🧹' },
  { theme: 'habitup_chores', name: 'Saanvi',    city: 'Surat',      detail: 'helped with dishes all week',        meta: 'Habit Up · Chores', icon: '🧺' },
  { theme: 'habitup_chores', name: 'Soham',     city: 'Pune',       detail: 'made his bed every morning',         meta: 'Habit Up · Chores', icon: '🛏️' },
  { theme: 'habitup_chores', name: 'Keerthana', city: 'Coimbatore', detail: 'kept a 10 day chores streak',        meta: 'Habit Up · Chores', icon: '🧹' },
  { theme: 'habitup_chores', name: 'Yash',      city: 'Indore',     detail: 'watered the plants all week',        meta: 'Habit Up · Chores', icon: '🪴' },
  { theme: 'habitup_chores', name: 'Vanshika',  city: 'Jaipur',     detail: 'finished her chores 7 days straight', meta: 'Habit Up · Chores', icon: '🧺' },

  // ===== Parenting Virtue (6) :: parent-facing =====
  { theme: 'parentingvirtue', name: 'The Joshi family',    city: 'Pune',      detail: 'practised the virtue of Patience',   meta: 'Parenting Virtue', icon: '🌱' },
  { theme: 'parentingvirtue', name: 'The Khanna family',   city: 'Delhi',     detail: 'worked on Active Listening this week', meta: 'Parenting Virtue', icon: '❤️' },
  { theme: 'parentingvirtue', name: 'The Iyer family',     city: 'Chennai',   detail: 'practised mindful Encouragement',    meta: 'Parenting Virtue', icon: '🌱' },
  { theme: 'parentingvirtue', name: 'The Sengupta family', city: 'Kolkata',   detail: 'focused on Empathy all week',        meta: 'Parenting Virtue', icon: '❤️' },
  { theme: 'parentingvirtue', name: 'The Shah family',     city: 'Ahmedabad', detail: 'practised the virtue of Consistency', meta: 'Parenting Virtue', icon: '🌱' },
  { theme: 'parentingvirtue', name: 'The Rao family',      city: 'Bengaluru', detail: 'worked on positive Praise this week', meta: 'Parenting Virtue', icon: '❤️' },

];