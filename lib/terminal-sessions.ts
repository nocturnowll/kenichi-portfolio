import type { TypewriterLine } from './hooks/useTypewriter'

export const SESSION_JOB_HUNTER: TypewriterLine[] = [
  { text: '$ node scraper/main.ts --boards remotely,wellfound,wwr', delay: 200 },
  { text: '→ Fetching RemoteOK...          847 listings', delay: 300 },
  { text: '→ Applying role filters...       23 matches', delay: 200 },
  { text: '→ Deduplicating against vault... 11 new jobs', delay: 200 },
  { text: '→ Scoring against profile...     Claude running', delay: 400 },
  { text: '→ Sending Telegram digest...     ✓', delay: 300 },
  { text: '✓ Complete in 4.2s · Next run in 8h', delay: 100 },
]

export const SESSION_CRM: TypewriterLine[] = [
  { text: '$ npx tsx scripts/score-jobs.ts', delay: 200 },
  { text: '→ Reading 11 unscored jobs from vault...', delay: 300 },
  { text: '→ Scoring against career/profile.md...', delay: 500 },
  { text: '→ Growth Lead @ Linear     — 9.2/10 ✓', delay: 200 },
  { text: '→ Community Lead @ Notion  — 8.7/10 ✓', delay: 200 },
  { text: '→ Marketing Mgr @ Stripe   — 7.1/10', delay: 200 },
  { text: '✓ 3 applications recommended. Scores written to vault.', delay: 100 },
]
