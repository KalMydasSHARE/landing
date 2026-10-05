/**
 * Kal Mydas, i18n (FR/EN) system
 * Adds data-i18n driven language switching.
 * French is the default (content lives in the HTML).
 * English translations are stored here and swapped via JS.
 */

const I18N_EN = {
  /* ===== META (handled separately) ===== */
  _title: "Kal Mydas, Gold, algorithmically",
  _description: `Algorithmic gold (XAUUSD) trading strategies simulated on real broker data over up to 21 years. Public contracts on Base, verifiable by anyone. Past performance does not guarantee future results. Risk of partial or total capital loss.`,
  _og_title: "Kal Mydas, Gold, algorithmically",
  _og_description: `Algorithmic gold trading strategies simulated on real data over up to 21 years. Public contracts on Base, verifiable by anyone. Past performance does not guarantee future results.`,
  /* ===== NAV ===== */
  nav_how: "How it works",
  nav_group_protocol: "The protocol",
  nav_strategies: "Strategies",
  nav_token: "KAL Token",
  nav_security: "Security",
  nav_roadmap: "Roadmap",
  nav_about: "About",
  nav_ecosystem: `Ecosystem`,
  nav_cta: `Open the application`,
  theme_new_badge: "NEW",

  /* ===== HERO ===== */
  hero_h1: `Don't trust us. <span class="gold">Verify.</span>`,
  hero_tagline: `The rigor of a private bank, without the bank.`,
  hc_perf_eyebrow: `<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M2 11l3.3-3.4 2.4 2.4L14 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 4h4v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Simulated annual performance of the robots`,
  hc_perf_note: `over 4 to 21 years of <span class="g-term" data-g="backtest">historical simulation</span>, depending on the strategy. This is not the result of a deposit.`,
  hc_algos_eyebrow: `Algorithms`,
  hc_algos_note: `5 on gold (<span class="g-term" data-g="xauusd">XAUUSD</span>), 1 on bitcoin, executed on-chain via gTrade`,
  hc_custody_eyebrow: `<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="currentColor" stroke-width="1.3"/></svg>Your wallet`,
  hc_custody_head: `Public contract on Base`,
  hc_custody_note: `Your deposit lives in a <strong>public contract</strong>, readable by anyone. You alone sign from your wallet.`,
  hc_access_eyebrow: `Access`,
  hc_access_big: `1 Pass`,
  hc_access_note: `An Access Pass opens the strategies. The minimum amount is shown at deposit, depending on the strategy.`,
  hc_base_text: `<strong>Base mainnet</strong>, every contract verifiable on Basescan.`,
  hc_disclaimer: `Historical simulations over 4 to 21 years of XAUUSD data. Live execution via gTrade may produce different results. Risk of partial or total capital loss. Past performance does not guarantee future performance.`,
  hero_btn_primary: `Open the application <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  hero_btn_secondary: "View strategies",
  hero_telegram: "Join the community on Telegram",
  hero_support_link: "Direct support @kal_mydas",

  /* ===== PASTOR P: PROBLEM ===== */
  probleme_label: "The reality",
  probleme_title: "You've been asked to trust far too often.",
  probleme_body: "In crypto, you are constantly asked to trust. To trust teams you never see, figures no one verifies, promises that change the moment things go wrong. And serious gold management, the kind that has run for decades inside institutions, stayed closed, opaque, reserved for those who already had everything. On one side, smart money locked away; on the other, strangers demanding your trust. You deserve better than that choice.",

  /* ===== STATS ===== */
  trust_head: `The proof, not the promise, <span class="gold">all verifiable</span>`,
  stat_1_label: "Trading robots",
  stat_2_label: `Of <span class="g-term" data-g="backtest">backtested</span> data`,
  stat_3_label: `<span class="g-term" data-g="smart_contract">Public contracts</span>, verifiable on Basescan`,
  stat_4_label: "Unit tests",

  /* ===== HOW IT WORKS ===== */
  how_label: "Simple and fast",
  how_title: "How does it work?",
  how_desc: `3 steps to participate`,
  step_1_h: `Connect a wallet`,
  step_1_p: `Create a kal pay wallet on your device, with no account and no email. Or connect MetaMask or WalletConnect.`,
  step_2_h: "Choose your strategy",
  step_2_p: `Take an Access Pass, then choose your strategy, from the most conservative to the riskiest. The minimum amount is shown at deposit.`,
  step_3_h: `Track your share`,
  step_3_p: `Your deposit carries its share of the gains and losses of the protocol reserve and can fall to zero. You withdraw without a Pass and without delay, except during an emergency pause.`,
  nurture_title: "Need guidance getting started?",
  nurture_desc: "Chat directly with Kal Mydas support on Telegram. No automated bot, real human assistance to answer your questions.",
  nurture_btn: `Chat with support <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 0.4rem; vertical-align: -2px;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.938z"/></svg>`,

  eco_label: `One wallet`,
  eco_title: `The ecosystem`,
  eco_desc: `Several applications on Base, one token. They all open from home.kalmydas.com, with the same wallet.`,
  eco_1_h: `KALmydas, the strategies`,
  eco_1_p: `Trading robots on gold, and one strategy on bitcoin.`,
  eco_2_h: `kal pay, the wallet`,
  eco_2_p: `Twelve words drawn on your device, with no account and no email.`,
  eco_3_h: `KAL move, movement`,
  eco_3_p: `The application that links physical activity to the protocol. It opens with 300 KAL locked as veKAL.`,
  eco_4_h: `Messaging`,
  eco_4_p: `Wallet to wallet, end-to-end encrypted.`,
  eco_more: `Learn more →`,
  /* ===== STRATEGIES ===== */
  strat_label: `6 strategies, 5 on gold`,
  strat_title: "Our trading strategies",
  strat_desc: `Each gold robot (<span class="g-term" data-g="xauusd">XAUUSD</span>) follows its own approach, <span class="g-term" data-g="backtest">backtested</span> on real broker data.`,
  strat_horizon_desc: `Trend following on gold, conservative profile`,
  strat_horizon_tag: "Conservative",
  strat_horizon_meta: `per year, simulated · 1,098 trades`,
  strat_horizon_bt: "11 years of backtest",

  strat_valkyrie_desc: `Breakout and pyramid on gold, balanced profile`,
  strat_valkyrie_tag: "Balanced",
  strat_valkyrie_meta: `per year, simulated · 329 trades`,
  strat_valkyrie_bt: "16 years of backtest",

  strat_revolution_desc: `Trend breakout and triple filter, dynamic profile`,
  strat_revolution_tag: "Dynamic",
  strat_revolution_meta: `per year, simulated · 2,166 trades`,
  strat_revolution_bt: "21 years of backtest",

  strat_treasury_desc: `Phoenix engine, adaptive trailing stop`,
  strat_treasury_tag: "Aggressive",
  strat_treasury_meta: `per year, simulated · 1,815 trades`,
  strat_treasury_bt: "21 years of backtest",

  strat_orion_desc: `Intraday impulse on gold, high target and high risk`,
  strat_orion_tag: "High-Risk",
  strat_orion_meta: `per year, simulated · 800 trades`,
  strat_orion_bt: "20 years of backtest",

  strat_horizon_perf: "4.15%",
  strat_valkyrie_perf: "12.49%",
  strat_revolution_perf: "24.43%",
  strat_treasury_perf: "33.05%",
  strat_orion_perf: "78.99%",
  strat_horizon_pf: `<span class="g-term" data-g="profit_factor">PF</span> 1.31`,
  strat_valkyrie_pf: `<span class="g-term" data-g="profit_factor">PF</span> 2.30`,
  strat_revolution_pf: `<span class="g-term" data-g="profit_factor">PF</span> 1.11`,
  strat_treasury_pf: `<span class="g-term" data-g="profit_factor">PF</span> 1.35`,
  strat_orion_pf: `<span class="g-term" data-g="profit_factor">PF</span> 1.65`,

  /* ===== COMPARISON TABLE ===== */
  th_strategy: "Strategy",
  th_return: "Performance",
  th_backtest: "Backtest",
  th_perf_fee: "Perf. fee",

  disclaimer: "Historical simulations over 4 to 21 years of XAUUSD data. Live execution via gTrade may produce different results. Risk of partial or total capital loss. Past performance does not guarantee future performance.",

  strat_deposit_note: `These figures are simulations of the robots. They are not deposit results. Your deposit carries its share of the gains and losses of the protocol reserve and can fall to zero.`,
  strat_genesis_note: `GENESIS, the sixth strategy, trades bitcoin (BTC/USD) and executes on gTrade, with USDC collateral. Its state is shown in the application. The warning on XAUUSD simulations does not apply to it. Bitcoin is highly volatile. Risk of total capital loss.`,
  /* ===== TOKEN KAL ===== */
  token_label: "Utility Token",
  token_title: "The KAL token",
  token_desc: `An <span class="g-term" data-g="erc20">ERC-20</span> token at the heart of the Kal Mydas ecosystem. Supply capped at 10 million, with no token destruction.`,
  token_ft1: `<span class="g-term" data-g="bonding_curve">Bonding curve</span>`,
  token_f1: `Price set by a public formula written into the contract`,
  token_ft2: `Buyback then Recirculation`,
  token_f2: `A portion of performance fees buys back KAL on the market and reinjects it into the protocol's KalSwap KAL/USDC liquidity pool, through the <code style="font-family: ui-monospace, monospace; font-size: 0.9em;">BuybackRecirculator</code> contract (Zero Burn doctrine, no destruction)`,
  token_ft3: `Service indemnity`,
  token_f3: `Lock your KAL as <span class="g-term" data-g="vekal">veKAL</span>. The protocol pays a weekly share of its fees in <span class="g-term" data-g="usdc">USDC</span>. This is the indemnity for the technical service that remunerates securing and governance. It does not follow strategy results.`,
  token_ft4: `<span class="g-term" data-g="lp">LP</span> rewards`,
  token_f4: `Liquidity <span class="g-term" data-g="staking">staking</span> with KAL rewards`,
  token_ft5: `Pool bonus`,
  token_f5: `5% of performance fees are paid in KAL to strategy depositors, pro rata. No amount is guaranteed.`,
  token_ft6: `Governance`,
  token_f6: `On-chain community votes, with a dedicated interface`,
  token_ft7: `<span class="g-term" data-g="offre_plafonnee">Capped supply</span>`,
  token_f7: `10 million KAL maximum, with no token destruction`,

  /* ===== SECURITY ===== */
  sec_label: "Trust & Transparency",
  sec_title: `Protocol security`,
  sec_desc: `The protocol relies on public <span class="g-term" data-g="smart_contract">smart contracts</span>, deployed on the Base <span class="g-term" data-g="blockchain">blockchain</span>.`,
  sec_1_h: `Verifiable <span class="g-term" data-g="smart_contract">smart contracts</span>`,
  sec_1_p: `Public source code, verifiable contract by contract on <span class="g-term" data-g="basescan">Basescan</span>.`,
  sec_2_h: "1,100+ unit tests",
  sec_2_p: `The critical functions of the contracts are covered by automated tests.`,
  sec_3_h: `<span class="g-term" data-g="base_l2">Base</span> by Coinbase`,
  sec_3_p: `Deployed on Base, Ethereum’s <span class="g-term" data-g="layer2">layer 2</span> backed by Coinbase. Low network fees.`,
  sec_4_h: `Withdrawal and ownership`,
  sec_4_p: `You alone sign your deposits and withdrawals. You withdraw without a Pass and without delay, within the USDC available in the pool, except during an emergency pause decided by the contract owner. During their run-in period the contracts in service are owned by the protocol’s deployment key. Ownership will then move to the multisig.`,
  sec_5_h: `<span class="g-term" data-g="hwm">High-Water Mark</span>`,
  sec_5_p: `<span class="g-term" data-g="perf_fee">Performance fees</span> only apply to new gains. Nothing is taken on a loss.`,
  /* ===== ROADMAP ===== */
  road_label: "Long-term vision",
  road_title: "Roadmap",
  road_1_phase: `Phase 1, Q1 2026 <span class="tag-done">Completed</span>`,
  road_1_h: "Foundations",
  road_1_p: `First <span class="g-term" data-g="smart_contract">smart contracts</span> deployed on <span class="g-term" data-g="arbitrum_sepolia">Arbitrum Sepolia</span>. E2E tests validated. MVP frontend connected <span class="g-term" data-g="on_chain">on-chain</span>. Whitepaper published. 5 verified <span class="g-term" data-g="backtest">backtests</span>.`,
  road_2_phase: `Phase 2, Q2 2026 <span class="tag-done">Completed</span>`,
  road_2_h: "Development & Beta",
  road_2_p: `Contracts validated in private beta and then deployed on <span class="g-term" data-g="base_l2">Base</span> mainnet on May 1, 2026. veKAL, governance, referral system, auto-compound, performance diversifier, RWA treasury, individual solo mode per strategy, all coded and tested. Beta testing program active.`,
  road_3_phase: `Phase 3, public access <span class="tag-done">Completed</span>`,
  road_3_h: "Public opening",
  road_3_p: `Access to the protocol is open to everyone. The protocol has been running on <span class="g-term" data-g="base_l2">Base</span> since 1 May 2026.`,
  /* ===== TRACK RECORD (demo-account algorithm performance, F9 LEGAL 2026-05-25) ===== */
  track_label: "Algorithm trade journal",
  track_title: `Every trade is published`,
  track_desc: `Every trade of the robots is published, gains and losses, on the Transparency page. Nothing is filtered.`,

  track_scope: `Before the protocol opened, the robots ran for about six months on demo accounts, in market conditions. They were also simulated over 4 to 21 years of history depending on the strategy. These proofs can be checked with the <a href="https://t.me/KalMydas_OFFICIEL" target="_blank" rel="noopener" style="color: var(--gold-light); text-decoration: underline;">Telegram</a> community.`,
  track_cta: `See the full journal`,
  track_disclaimer: `The Transparency page separates the trades of MT4 demo accounts, with no capital engaged, from the trades executed on Base via gTrade with real capital. Demo execution does not exactly reproduce real execution. Risk of partial or total capital loss. Past performance does not guarantee future results.`,
  /* ===== TESTIMONIALS (added session 314, 2026-05-04) ===== */
  test_label: "Feedback from early members",
  test_title: "What they say, unfiltered",
  test_desc: "Three pieces of feedback published as-is by members of the Kal Mydas channel, in response to an open call for unfiltered testimonials. No editorial selection, no rewording. A few terms are visually blurred out of regulatory caution, the original word remains readable on hover. Testimonials kept in their original French language for authenticity.",
  test_sylvie_role: "Demo: Jan 21, 2026 → Live: Feb 15, 2026",
  test_sylvie_date: "Testimonial posted May 1, 2026",
  test_henri_role: "Demo: Jan 21, 2026 → Live: Feb 15, 2026",
  test_henri_date: "Testimonial posted May 1, 2026",
  test_street_role: "Demo since March 19, 2026 (ongoing)",
  test_street_date: "Testimonial posted May 2, 2026",
  test_cta: "Verify on the Telegram channel",
  test_note: `These three testimonials were published under <a href="https://t.me/KalMydas_OFFICIEL/453" target="_blank" rel="noopener">this post on the Kal Mydas channel</a>. Anyone can read them, verify them and write directly to their authors. Past performance does not guarantee future results.`,
  road_4_phase: "Phase 4",
  road_4_h: "Growth",
  road_4_p: `Community rewards program. Public <span class="g-term" data-g="vekal">veKAL</span> incentives and <span class="g-term" data-g="dao">DAO</span> governance. Advanced analytics dashboard. New asset exploration.`,
  road_5_phase: "Phase 5",
  road_5_h: "Expansion",
  road_5_p: `New strategies and markets. <span class="g-term" data-g="dao">DAO</span> governance. Multi-chain expansion (Base, Arbitrum, Polygon).`,
  /* ===== FAQ ===== */
  faq_label: "Frequently asked questions",
  faq_title: "FAQ",
  faq_1_q: "What exactly is Kal Mydas?",
  faq_1_a: `Kal Mydas is a protocol on Base offering algorithmic trading strategies: 5 on gold (XAUUSD) and GENESIS on bitcoin. The bots execute trades automatically. The state of each strategy is read live in the application. Every trade can be verified on the Base blockchain.`,
  faq_2_q: "What is the minimum deposit?",
  faq_2_a: `The minimum amount depends on the strategy. It is read from the contract and shown at deposit, in USDC on Base. There is no maximum amount.`,
  faq_3_q: "How do withdrawals work?",
  faq_3_a: `You withdraw without a Pass and without delay, at the current share price, within the USDC available in the pool. Withdrawal is suspended only during an emergency pause decided by the contract owner. No withdrawal fee. You interact directly with the smart contract.`,
  faq_4_q: "Is future performance guaranteed?",
  faq_4_a: `No. The figures shown are historical simulations of the robots, run on real broker data (up to 21 years). They are not deposit results. Your deposit carries its share of the gains and losses of the protocol reserve and can fall to zero. Past performance does not guarantee future results.`,
  faq_5_q: "What are the fees?",
  faq_5_a: `No entry or exit fees. Performance fees of 20% on every strategy, 10% for a deposit in KAL, charged on new gains thanks to the High-Water Mark. Nothing is taken on a loss. No management fee is charged. The Access Pass is paid separately.`,
  faq_6_q: "Do I need a crypto wallet to use Kal Mydas?",
  faq_6_a: `No. kal pay, the ecosystem wallet, is created on home.kalmydas.com, on your device, with no account and no email. You can also connect MetaMask or a wallet through WalletConnect.`,
  faq_8_q: "Which strategy should I choose as a beginner?",
  faq_8_a: "HORIZON is the most conservative profile, designed for discovery (modest simulated performance, controlled drawdown on backtest). VALKYRIE offers a balanced profile. The more aggressive strategies (REVOLUTION, TREASURY, ORION) require a clear understanding of volatility. You can pick several and split your capital as you wish.",
  /* FAQ 9 ajoutée 2026-06-04, correctif A, revue externe indépendante, doctrine Zero Burn */
  faq_9_q: "Does KAL burn?",
  faq_9_a: `The protocol never burns KAL, by choice. KAL bought back through performance fees goes through the <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">BuybackRecirculator</code> contract and is reinjected into the protocol’s KalSwap KAL/USDC liquidity pool, never destroyed. This doctrine is called Zero Burn and can be verified on <span class="g-term" data-g="basescan">Basescan</span>. It holds through the protocol’s practice and not through the token code. The <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">KalToken</code> contract inherits from OpenZeppelin’s <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">ERC20Burnable</code>, the <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">burn</code> function exists, and any holder can destroy their own KAL if they choose to.`,
  /* ===== BUILT WITH ===== */
  tech_label: "Infrastructure",
  tech_title: "Built with",

  /* ===== CTA ===== */
  cta_h2: `Ready to participate in <span style="background: var(--gradient-gold-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">algorithmic gold</span>?`,
  cta_p: "Join the early participants of Kal Mydas. The documentation states what KAL opens and how it circulates.",
  cta_btn_primary: `Open the application <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cta_btn_secondary: "Read the Whitepaper",
  cta_telegram: "Join the community on Telegram",
  cta_support_link: "Contact support @kal_mydas",

  /* ===== ABOUT ===== */
  about_label: "Genesis",
  about_title: "About Kal Mydas",
  about_desc: "Why this project exists and how it works",
  about_why_h3: "Why Kal Mydas exists",
  about_why_p: `Kal Mydas is not just a set of algorithms. It is a decentralized protocol built around gold and bitcoin, designed for the autonomy of those who take part in it. The algorithms are its first piece, not its last. The project was born from a simple frustration: why does algorithmic trading, a common tool of banks and large financial structures, remain out of reach for the public? Our protocol, built on <span class="g-term" data-g="base_l2">Base</span>, opens to everyone a share of a ledger kept by the protocol.`,
  about_approach_h3: "Our approach",
  about_approach_p: `Our 5 gold robots (<span class="g-term" data-g="xauusd">XAUUSD</span>) are developed and optimized on <span class="g-term" data-g="mt4">MetaTrader 4</span>. They have been backtested on real historical broker data (4 to 21 years depending on the strategy), forward-tested, and stress-tested on the 2008 and 2020 crises. A sixth strategy, GENESIS, trades bitcoin.`,
  about_part_h3: "How to participate",
  about_part_p: `A single Access Pass is enough, a subscription verifiable on the <span class="g-term" data-g="blockchain">blockchain</span>, from 1 USDC per day depending on the level. Choose your strategy and deposit. Your deposit carries its share of the gains and losses of the protocol reserve and can fall to zero. Performance fees apply only to new gains, thanks to the <span class="g-term" data-g="hwm">High-Water Mark</span>.`,
  about_arch_h3: "Technical architecture",
  about_arch_contracts: `Public contracts`,
  about_arch_tests: "Unit tests",

  about_arch_withdrawals: `Withdrawal without delay`,
  about_arch_desc: `A bridge connects the <span class="g-term" data-g="mt4">MT4</span> robots to the blockchain. Every trade is written on Base and can be verified on <span class="g-term" data-g="basescan">Basescan</span>. You withdraw without a Pass and without delay, within the USDC available in the pool, except during an emergency pause decided by the contract owner.`,
  about_token_h3: "The KAL token",
  about_token_desc2: `The KAL token (<span class="g-term" data-g="erc20">ERC-20</span>, 10M max supply) uses a public <span class="g-term" data-g="bonding_curve">bonding curve</span> written into the contract. 20% of performance fees are used for buyback then redirection into the protocol’s KalSwap KAL/USDC liquidity pool, through the <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">BuybackRecirculator</code> contract (Zero Burn doctrine, no destruction by the protocol). Lock your KAL as <span class="g-term" data-g="vekal">veKAL</span>. The protocol pays a weekly share of its fees in <span class="g-term" data-g="usdc">USDC</span>. This is the indemnity for the technical service that remunerates securing and governance. It does not follow strategy results.`,
  about_token_staking: "15% KAL staking rewards",
  about_token_curve: "4.5% Curve",
  about_token_lp: "1.5% LP rewards",
  about_token_community: "0.5% Testers",
  about_token_reserve: "73.5% Unallocated reserve",
  /* Note technique Zero Burn ajoutée 2026-06-04, correctif A, revue externe indépendante */
  about_token_zeroburn_note: `<strong style="color: var(--text); font-style: normal;">Technical note for advanced readers:</strong> the <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">KalToken</code> contract inherits from OpenZeppelin’s <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">ERC20Burnable</code>. The <code style="font-family: ui-monospace, monospace; font-size: 0.95em;">burn</code> function therefore exists in the token. Any holder can destroy their own KAL if they choose to. KAL is not burned, by choice of the protocol. No path of the protocol calls this function. This can be verified on <span class="g-term" data-g="basescan">Basescan</span>.`,
  /* ===== TOKEN DISTRIBUTION CHART (6 lines, aligned with DOC/02_TOKENOMICS canonical source, OF 202, 2026-07-19) ===== */
  token_dist_title: "KAL token distribution",
  token_dist_subtitle: "Total supply: 10,000,000 KAL · 0% reserved for an internal team · productive distribution, with no token destruction",
  token_dist_1: "KAL staking rewards (1,500,000 KAL)",
  token_dist_3: "Initial bonding curve (450,000 KAL)",
  token_dist_4: "Liquidity provider rewards (150,000 KAL)",
  token_dist_5: "Tester recognition program (50,000 KAL)",
  token_dist_6: "Unallocated reserve (7,350,000 KAL)",
  token_dist_footnote: "Programmed emission of the current contracts, about 2,650,000 KAL. The remainder is a free ceiling, never minted without a multisig decision, no automatic dilution. No team allocation: founder compensation depends entirely on actual protocol performance, paid in USDC.",
  about_risk_h3: "Risk disclaimer",
  about_risk_p: `We promise nothing. Past performance does not guarantee future results. Your deposit carries its share of the gains and losses of the protocol reserve and can fall to zero. In simulation, some strategies went through temporary drawdowns of up to 70%. We publish the source code and the test histories.`,
  about_timeline_h3: "Where we are",
  about_tl_1: `<strong>Q1 2026</strong>, foundations laid, first contracts, first connected version`,
  about_tl_2: `<strong>Q2 2026</strong>, contracts deployed on Base, beta testing, veKAL and governance`,
  about_tl_3: "<strong>Since 1 May 2026</strong>: the protocol has been running on Base mainnet. Every operation is written there and readable by anyone.",
  about_tl_4: `<strong>Growth</strong>, public veKAL incentives, DAO governance, new ecosystem applications`,
  about_tl_link: "View full roadmap →",
  about_team_h3: "The team",
  about_team_p1: "Kal Mydas is designed, coded and signed by its founder, based in Switzerland. A circle of contributors has been alongside since the early months.",
  about_team_p2: "The founder signs under the pseudonym Kal. He builds, deploys and monitors the protocol himself.",
  about_team_p3: "The contracts, their addresses and every operation can be checked on the Base chain.",
  about_team_p4: `What you can verify now: the contract code is public and verifiable, transactions are visible on <span class="g-term" data-g="basescan">Basescan</span>, the treasury sits in a Gnosis Safe with a single signer today. During their run-in period the contracts of the generation in service are owned by the protocol’s deployment key. Ownership will then move to the multisig.`,
  /* ===== FOOTER ===== */
  footer_tagline: `Algorithmic gold trading, on Base. Public contracts, verifiable by anyone.`,
  footer_col_platform: "The protocol",
  footer_app: "Application",
  footer_wp: "Whitepaper",
  footer_strategies: "Strategies",
  footer_token: "KAL Token",
  footer_security: "Security",
  footer_roadmap: "Roadmap",
  footer_col_community: "Community",
  footer_support: "Direct support (@kal_mydas)",
  footer_kal_contract: "KAL contract on Base",
  footer_contact: "Contact: kal@kalmydas.ch",
  footer_col_resources: "Resources",
  footer_docs: "Documentation",
  footer_architecture: "Architecture",
  footer_tokenomics: "Tokenomics",
  footer_governance: "Governance",
  footer_addresses: "On-chain addresses",
  footer_audits: "Audits",
  footer_col_legal: "Legal",
  footer_about: "About",
  footer_faq: "FAQ",
  footer_privacy: "Privacy",
  footer_cookies: "Cookies",
  footer_terms: "Terms of use",
  footer_manage_cookies: "Manage cookies",
  footer_risk_title: "Risk disclaimer:",
  footer_risk_text: `Kal Mydas is an experimental protocol. Algorithmic trading and crypto-assets carry a high risk of total capital loss. The performance figures quoted are historical simulations over 4 to 21 years of XAUUSD data. Live execution via gTrade may produce different results. Past performance does not guarantee future results. This website does not constitute financial advice, solicitation, or an offer to buy or sell financial instruments. You are solely responsible for your decisions. Check the applicable legislation in your jurisdiction before participating.`,
  footer_copy: `&copy; 2026 Kal Mydas, algorithmic gold trading.`,
  /* ===== COMPARISON (added 2026-06-23, OF 105, EN was missing) ===== */
  comp_label: "Why Kal Mydas",
  comp_title: "Kal Mydas vs the alternatives",
  comp_km_badge: "Recommended",
  comp_km_sub: `Algorithmic gold trading, on public contracts.`,
  comp_desc: `A comparison across 6 criteria for anyone seeking gold-market exposure without going through a broker.`,
  comp_th_criterion: "Criterion",
  comp_th_manual: "Manual trading",
  comp_th_etf: "Gold ETF (GLD, BAR)",
  comp_th_hodl: "Crypto HODL",
  comp_r1_l: "Custody of funds",
  comp_r1_kal: `Public contract on Base`,
  comp_r1_man: "The broker holds your funds",
  comp_r1_etf: "Bank / broker",
  comp_r1_hodl: "Platform or wallet",
  comp_r2_l: "Fees",
  comp_r2_kal: `20% of new gains, 10% for a deposit in KAL`,
  comp_r2_man: "Spread + per-trade commissions",
  comp_r2_etf: "0.17 to 0.40% per year + broker fees",
  comp_r2_hodl: "Purchase fees + gas",
  comp_r3_l: "Availability",
  comp_r3_kal: "24/7",
  comp_r3_man: "XAUUSD market hours",
  comp_r3_etf: "Exchange hours",
  comp_r3_hodl: "24/7",
  comp_r4_l: "Historical testing",
  comp_r4_kal: "4 to 21 years depending on strategy",
  comp_r4_man: "Up to the user",
  comp_r4_etf: "Tracks the gold price",
  comp_r4_hodl: "Not applicable",
  comp_r5_l: "Decorrelation from crypto market",
  comp_r5_kal: "Yes, XAUUSD underlying",
  comp_r5_man: "Yes, XAUUSD underlying",
  comp_r5_etf: "Yes",
  comp_r5_hodl: "No, correlated to BTC / ETH",
  comp_r6_l: "Setup",
  comp_r6_kal: `kal pay, MetaMask or WalletConnect`,
  comp_r6_man: "Broker account opening \u00b7 1 to 5 days",
  comp_r6_etf: "Securities account opening \u00b7 1 to 7 days",
  comp_r6_hodl: "Wallet + crypto onboarding",
  comp_note: `Indicative comparison. Each solution meets a different need. Kal Mydas is designed for gold-market exposure through algorithmic strategies, without going through a broker.`,
  /* Bouton flottant du support (OF 2018 : la cle vivait par erreur dans le glossaire, le bouton restait en francais) */
  conciergerie_text: `Direct support <span class="conc-text-desktop">· Ask a question</span>`,
};

/* ===== ENGLISH GLOSSARY ===== */
const GLOSSARY_DEFS_EN = {
  xauusd: "International ticker symbol for the price of gold (XAU) in US dollars (USD). One of the most liquid markets in the world.",
  backtest: "Simulation of a trading strategy on real historical data to evaluate its past performance.",
  arbitrum_l2: "Layer 2 network built on top of Ethereum by Offchain Labs. Fast, low-cost transactions with security inherited from Ethereum.",
  smart_contract: "Autonomous computer program deployed on the blockchain. Executes automatically according to predefined rules, with no intermediary. Code is public and verifiable.",
  erc20: "Standard technical norm for tokens on Ethereum and compatible networks. Ensures interoperability with all wallets and platforms.",
  bonding_curve: "Transparent mathematical mechanism that automatically determines a token's price based on circulating supply. The formula is public and written into the contract.",
  buyback_burn: "Automatic mechanism where a portion of performance fees is used to buy back KAL tokens. At Kal Mydas, bought-back KAL is recirculated as liquidity (Zero Destruction philosophy).",
  staking: "The act of locking tokens in a protocol to provide liquidity or secure the network, in exchange for rewards.",
  lp: "Liquidity Provider, a person who deposits tokens into an exchange pool to facilitate transactions, in exchange for rewards.",
  hwm: "High-Water Mark, protection mechanism: performance fees only apply on gains above the all-time high. Prevents paying twice for the same gains.",
  dex: "Decentralized Exchange, a platform that allows users to trade tokens directly with each other, without a centralized intermediary.",
  dao: "Decentralized Autonomous Organization, community governance where decisions are made by token holder votes, with no central authority.",
  arbiscan: "Blockchain explorer for viewing all transactions and contracts deployed on the Arbitrum network. Ensures complete transparency.",
  nft: "Non-Fungible Token, a unique, non-interchangeable digital asset on the blockchain. Used at Kal Mydas for the access pass.",
  mainnet: "The main network of a blockchain where transactions have real value (as opposed to testnet which uses worthless tokens).",
  profit_factor: `Ratio between gross gains and gross losses of a simulation. Above 1, simulated gains exceed simulated losses.`,
  win_rate: "Percentage of winning trades out of the total trades executed by a strategy.",
  drawdown: "Maximum loss from a capital peak. Measures the worst temporary decline experienced by a strategy. Indicates maximum historical risk.",
  perf_fee: "Performance fee, charged only on strategy gains, never on initial capital. Applied with the High-Water Mark mechanism.",
  usdc: "Stablecoin pegged 1:1 to the US dollar, issued by Circle. Used as the deposit and settlement currency of the protocol.",
  on_chain: "Directly on the blockchain, all transactions are public, immutable, and verifiable by anyone.",
  tvl: "Total Value Locked, the total value of assets deposited in a DeFi protocol. An indicator of trust and protocol size.",
  non_custodial: `A model where the protocol does not hold your private keys. You sign your own transactions from your wallet.`,
  mt4: "MetaTrader 4, professional trading software used since 2005 to create, test, and execute automated strategies on financial markets.",
  lock_up: `A period during which funds cannot be withdrawn. At Kal Mydas there is no lock-up: you withdraw without delay, except during an emergency pause decided by the contract owner and within the USDC held by the pool.`,
  layer2: "A secondary network built on top of a main blockchain (like Ethereum) to improve speed and reduce transaction costs.",
  defi: "Decentralized Finance, financial services (trading, lending, savings) operated on blockchain via smart contracts, without banking intermediaries.",
  blockchain: "A distributed, tamper-proof digital ledger. Every transaction is publicly recorded and cannot be retroactively modified.",
  offre_plafonnee: "The KAL supply is capped at 10 million tokens, with no token ever destroyed. KAL buybacks are redirected to protocol liquidity (Zero Burn doctrine).",
  forward_test: "Testing a strategy under real market conditions without risking real capital. Validates that backtest results hold up.",
  stress_test: "Evaluating a strategy's behavior during periods of high volatility or crises (2008, 2020). Measures resilience.",
  testnet: "A blockchain test network using worthless tokens. Allows testing applications before official launch.",
  solidity: "Programming language used to write smart contracts on Ethereum and compatible networks.",
  oracle: "A service that transmits real-world data (prices, results) to the blockchain. Enables smart contracts to interact with external information.",
  epoch: "A defined time period in a protocol. At Kal Mydas, LP rewards are distributed per epoch with decreasing amounts.",

  fonds_institutionnels: "Financial structures managing significant capital (banks, pension funds, hedge funds). They have access to advanced trading tools traditionally unavailable to retail participants.",
  arbitrum_sepolia: "Test version of the Arbitrum network. Used during the development phase before the Base mainnet deployment in May 2026.",
  orderbook: "Order book, a system matching buyers and sellers in a market. At Kal Mydas, the price is determined by the bonding curve, with no orderbook.",
  vekal: "Vote-escrowed KAL, mechanism inspired by Curve Finance. Lock your KAL as veKAL. The protocol pays a weekly share of its fees in USDC. This is the indemnity for the technical service that remunerates securing and governance. It does not follow strategy results. Holding veKAL also grants voting on protocol parameters.",
  erc4626: "Technical standard for tokenized vaults on Ethereum. Enables standardized auto-compounding of gains.",
  pol: `Protocol-Owned Liquidity, liquidity owned by the protocol and not by users.`,
  rwa: "Real World Assets, real-world assets (Treasury bonds, real estate) tokenized on the blockchain. Offer performance uncorrelated to the crypto market.",
  base_l2: "Layer 2 network on Ethereum, optimized for consumer-facing applications. Kal Mydas mainnet has been live on Base since May 1, 2026.",
};

/* ===== i18n ENGINE ===== */
(function () {
  const FR_CACHE = {};
  // Liens dont l'adresse depend de la langue (compte X francophone ou anglophone).
  // Cle, l'element ; valeur, l'adresse FR d'origine lue dans le HTML.
  const HREF_FR_CACHE = new Map();

  /**
   * Cross-subdomain language preference, shared between kalmydas.com, app.kalmydas.com, docs.kalmydas.com.
   * Stored in a cookie scoped to .kalmydas.com (root domain) so all subdomains read the same value.
   * In local dev (localhost), falls back to localStorage only.
   * A language preference cookie is exempt from GDPR consent (functional cookie, ePrivacy art. 5.3).
   *
   * NOTE: Safari ITP 2.1+ caps client-set cookies (document.cookie) to 7 days regardless of
   * max-age. To survive that cap across cross-subdomain navigation, we also accept
   * ?lang=fr|en as a query param (decorated on outgoing links by installCrossSubdomainClickShim).
   */
  function readSharedCookie() {
    const m = document.cookie.match(/(?:^|; )km_lang=([^;]+)/);
    if (m && (m[1] === 'fr' || m[1] === 'en')) return m[1];
    return null;
  }

  function readQueryLang() {
    try {
      const m = (location.search || '').match(/[?&]lang=(fr|en)\b/);
      return m ? m[1] : null;
    } catch (e) { return null; }
  }

  function isKalmydasHost(host) {
    // Strict: exactly kalmydas.com OR any proper .kalmydas.com subdomain.
    // Avoids false positives on e.g. evilkalmydas.com.
    return host === 'kalmydas.com' || host.endsWith('.kalmydas.com');
  }

  function writeSharedCookie(lang) {
    const isKalmydas = isKalmydasHost(location.hostname);
    const domainPart = isKalmydas ? '; domain=.kalmydas.com' : '';
    const securePart = location.protocol === 'https:' ? '; Secure' : '';
    // 1 year, root path, SameSite=Lax (allows top-level cross-subdomain navigation)
    document.cookie = `km_lang=${lang}; path=/${domainPart}; max-age=31536000; SameSite=Lax${securePart}`;
  }

  function cleanLangFromUrl() {
    try {
      if (!window.history || typeof history.replaceState !== 'function') return;
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        const newSearch = url.searchParams.toString();
        const newUrl = url.pathname + (newSearch ? '?' + newSearch : '') + url.hash;
        history.replaceState(null, '', newUrl);
      }
    } catch (e) {}
  }

  /**
   * Detect preferred language.
   * Priority:
   *   0. URL query (?lang=fr|en), survives Safari ITP 7-day cookie cap across cross-subdomain nav
   *   1. cross-subdomain cookie (user choice on landing/app/docs)
   *   2. localStorage (legacy fallback for users who chose before cookie was added)
   *   3. browser/system locale (navigator.language follows OS settings: "fr-FR", "en-US", etc.)
   *   4. fallback FR
   * Anything starting with "fr" → French. Everything else → English.
   */
  function detectInitialLang() {
    const qLang = readQueryLang();
    if (qLang) return qLang;
    const cookieLang = readSharedCookie();
    if (cookieLang) return cookieLang;
    const stored = localStorage.getItem('km_lang');
    if (stored === 'fr' || stored === 'en') return stored;
    const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  }

  /**
   * Intercept clicks on anchors that leave the current host but stay inside kalmydas.com
   * and append ?lang=XX so the destination page adopts the right language even if its cookie
   * has been purged (Safari ITP). Does not rewrite modifier-clicks (ctrl/cmd/middle button)
   * so standard browser behaviors are preserved.
   */
  function installCrossSubdomainClickShim() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target && e.target.closest && e.target.closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      let url;
      try { url = new URL(href, location.href); } catch (err) { return; }
      if (url.hostname === location.hostname) return; // same host, no need
      if (!isKalmydasHost(url.hostname)) return;      // not our family
      if (url.searchParams.has('lang')) return;       // already decorated
      url.searchParams.set('lang', currentLang);
      anchor.setAttribute('href', url.toString());
    }, true); // capture: update href before the browser starts navigation
  }

  let currentLang = detectInitialLang();

  // Cache FR initial meta tag values to allow restoration when switching EN -> FR.
  // Without this, switching language back to FR would leave EN meta tags in <head>,
  // causing copy-paste of URL while in EN to share EN description even on a FR session.
  const META_FR_CACHE = {};

  function cacheFR() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      FR_CACHE[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    // Memorise l'adresse FR des liens porteurs de data-i18n-href-en.
    document.querySelectorAll('[data-i18n-href-en]').forEach(el => {
      HREF_FR_CACHE.set(el, el.getAttribute('href'));
    });
    // Capture FR meta tag initial values once for later restoration.
    const desc = document.querySelector('meta[name="description"]');
    if (desc) META_FR_CACHE._description = desc.content;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) META_FR_CACHE._og_title = ogTitle.content;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) META_FR_CACHE._og_description = ogDesc.content;
  }

  function applyLang(lang) {
    currentLang = lang;
    // Persist to both: cookie (shared across *.kalmydas.com) + localStorage (legacy/local-dev).
    writeSharedCookie(lang);
    try { localStorage.setItem('km_lang', lang); } catch {}
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (lang === 'en' && I18N_EN[key] !== undefined) {
        el.innerHTML = I18N_EN[key];
      } else if (lang === 'fr' && FR_CACHE[key] !== undefined) {
        el.innerHTML = FR_CACHE[key];
      } else if (lang === 'en') {
        // T-017 (audit 2026-05-04): dev warning when an EN translation is missing
        // for a data-i18n key. Element keeps its FR content silently otherwise,
        // creating an undetected FR/EN mix.
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[i18n] EN translation missing for key:', key);
        }
      }
    });

    // Meme mecanisme, applique cette fois a l'adresse du lien et non a son contenu.
    document.querySelectorAll('[data-i18n-href-en]').forEach(el => {
      const en = el.getAttribute('data-i18n-href-en');
      const fr = HREF_FR_CACHE.get(el);
      if (lang === 'en' && en) {
        el.setAttribute('href', en);
      } else if (fr) {
        el.setAttribute('href', fr);
      }
    });

    // Update meta tags
    if (lang === 'en') {
      document.title = I18N_EN._title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = I18N_EN._description;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = I18N_EN._og_title;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = I18N_EN._og_description;
    } else {
      document.title = FR_CACHE._title || document.title;
      // Restore FR meta tags from cache (T-013, audit 2026-05-04).
      const desc = document.querySelector('meta[name="description"]');
      if (desc && META_FR_CACHE._description) desc.content = META_FR_CACHE._description;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && META_FR_CACHE._og_title) ogTitle.content = META_FR_CACHE._og_title;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && META_FR_CACHE._og_description) ogDesc.content = META_FR_CACHE._og_description;
    }

    // Update glossary definitions
    if (typeof window._glossarySetLang === 'function') {
      window._glossarySetLang(lang);
    }

    // Update toggle button appearance + aria-pressed for accessibility (T-015, audit 2026-05-04).
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      const frOpt = toggle.querySelector('.lang-option[data-lang="fr"]');
      const enOpt = toggle.querySelector('.lang-option[data-lang="en"]');
      if (frOpt) {
        frOpt.classList.toggle('active', lang === 'fr');
        frOpt.setAttribute('aria-pressed', lang === 'fr' ? 'true' : 'false');
      }
      if (enOpt) {
        enOpt.classList.toggle('active', lang === 'en');
        enOpt.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      }
    }

    // Re-init glossary click handlers for new elements
    if (typeof window.glossaryTooltipInit === 'function') {
      window.glossaryTooltipInit();
    }
  }

  function init() {
    // Merge page-specific EN translations (e.g. about page)
    if (window.PAGE_I18N_EN) {
      Object.assign(I18N_EN, window.PAGE_I18N_EN);
    }

    // Cache all French content
    cacheFR();
    FR_CACHE._title = document.title;

    // Create toggle button
    const nav = document.querySelector('.nav-links');
    if (nav) {
      const li = document.createElement('li');
      // T-015 (audit 2026-05-04): role=group + aria-pressed buttons for screen readers.
      li.innerHTML = `<div id="langToggle" class="lang-toggle" role="group" aria-label="Switch language">
        <button type="button" class="lang-option active" data-lang="fr" aria-pressed="true">FR</button>
        <button type="button" class="lang-option" data-lang="en" aria-pressed="false">EN</button>
      </div>`;
      // Insert before last <li> (the CTA button)
      const cta = nav.querySelector('.nav-cta');
      if (cta) {
        nav.insertBefore(li, cta.parentElement);
      } else {
        nav.appendChild(li);
      }

      document.getElementById('langToggle').addEventListener('click', function () {
        var nextLang = currentLang === 'fr' ? 'en' : 'fr';
        // Umami event tracking, RGPD compliant, sans cookie tiers
        try { if (window.umami && typeof window.umami.track === 'function') { window.umami.track('toggle_lang', { from: currentLang, to: nextLang }); } } catch (e) {}
        applyLang(nextLang);
      });
    }

    // Ensure the shared cookie reflects the current detected/saved language on every page load,
    // so if the user opened the landing first (auto-detected FR/EN), app.kalmydas.com picks it up.
    writeSharedCookie(currentLang);
    // If we arrived with ?lang=XX (came from another subdomain), promote it to cookie and
    // strip the query so it does not pollute copy/paste of the URL.
    cleanLangFromUrl();

    // Decorate outgoing links to sibling subdomains with ?lang=XX so Safari ITP's 7-day cookie
    // cap cannot desynchronize the user's language choice.
    installCrossSubdomainClickShim();

    // Apply saved language preference
    if (currentLang === 'en') {
      applyLang('en');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
