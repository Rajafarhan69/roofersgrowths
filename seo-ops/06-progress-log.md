# Progress Log

Append one entry per "Do today's tasks" session. Never delete prior entries — this is the record the master prompt requires ("always maintain a record of completed work"). Read the most recent entries before starting a new session so work isn't repeated.

---

## 2026-08-21 — Baseline / Phase 1 setup

**Completed:**
- Full technical + content audit (`00-audit.md`)
- Competitor + keyword research grounded in live web search (`01-keyword-research.md`)
- Location priority list grounded in real storm/demand data (`02-location-strategy.md`)
- Topical map and content calendar structure (`03-topical-map.md`)
- Keyword database seeded (`04-keyword-database.md`)
- 60-day phased roadmap (`05-roadmap-60-day.md`)
- GA4 (`G-Q7QQZJX79S`) confirmed live sitewide

**User decisions confirmed same day:**
- Primary keywords locked: "roofing marketing agency" + "roofing lead generation"
- Service scope locked: only the 7 existing service pages — no speculative pages for unconfirmed services

**Not yet done (top of Phase 1 backlog for next session):**
- Search Console verification + sitemap submission
- Bing Webmaster Tools verification

---

## 2026-08-21 — Phase 1: schema, internal linking, and a real bug fix

**Audit findings (technical checks that were already clean, no action needed):** canonical tags present and self-referencing on all 23 pages; Open Graph tags complete sitewide; zero images missing alt text; blog post already had Article + Person schema. Deepened the two primary pillar pages was considered and skipped — both already cover intro, problem framing, process, deliverables, proof, and FAQs at ~1,200 words each; adding more would be padding, not value.

**Completed:**
1. Added BreadcrumbList JSON-LD to 23 pages (all except homepage and 404, which don't need one)
2. Found and fixed a real bug: a stray "Tools" link was wedged into the visible breadcrumb trail on all 7 service pages (leaked from an earlier nav edit), rendering as broken/nonsensical breadcrumb text — restored to clean Home / Services / [Page]
3. Fixed a real internal-linking gap: roofing-lead-generation/ now links to the "what a roofing lead actually costs" post (previously only linked the other direction)
4. Validated all 70 JSON-LD blocks sitewide parse as valid JSON post-change

**Not yet done (top of Phase 1 backlog for next session):**
- Rich Results Test spot-check now that BreadcrumbList is added
- Core Web Vitals / PageSpeed baseline (needs a personal Google API key — public API is quota-blocked in this environment)

---

## 2026-08-21 (session 2) — GSC/Bing verified; Article schema rich-result fix

**User confirmed:** Search Console and Bing Webmaster Tools are now verified.

**Completed:**
1. Attempted sitemap ping to Google/Bing — both legacy ping endpoints are deprecated (404/410). Sitemap submission now has to go through each tool's UI directly — quick one-time manual step for the user.
2. Found and fixed a real Article rich-result eligibility gap: Article schema (blog post + all 5 case studies) was missing the required `image` property, and the Organization schema was missing `logo` — both required by Google. Added each case study's own dashboard screenshot as its Article image, `og-image.jpg` for the blog post (no dedicated post image exists), and the real site logo mark for the Organization.
3. Ran a real performance proxy check (public PageSpeed API is quota-blocked here): homepage is lean (23.4KB HTML + 36.5KB CSS + 7.3KB JS), `main.js` already correctly deferred by position (right before `</body>`). TTFB ~0.8s flagged as a watch item, not yet diagnosed.
4. Verified (via live web search) that Google fully removed FAQ rich results from Search as of May 2026 — logged in `00-audit.md` so expectations are set correctly: the FAQPage schema stays (still useful for GEO/AI extraction) but won't produce a visible snippet in Google anymore.
5. Validated all JSON-LD sitewide still parses cleanly after changes.

**Not yet done (top of Phase 1 backlog for next session):**
- Rich Results Test spot-check on 1-2 URLs (user action — needs browser, not scriptable)
- Real Core Web Vitals baseline once a personal PageSpeed API key is available, or first GSC Core Web Vitals report once enough data accumulates
- First real GSC query/impression data pull, once it accumulates (verified 2026-08-21 — expect nothing meaningful for several more days)

---

## 2026-08-23 — First Phase 2 content: sitemap confirmed submitted, first new blog post published

**User confirmed:** sitemap submitted in GSC (and Bing, per earlier confirmation).

**Completed:**
1. Wrote and published the second blog post: **"How to vet a roofing marketing agency before you sign"** at `/blog/how-to-vet-a-roofing-marketing-agency/` — targets the primary "roofing marketing agency" pillar with vendor-research/commercial intent, a real content gap (no vetting-questions guide existed). Five genuine, non-fabricated questions (lead definition, asset ownership, dashboard access, contract terms, exclusivity) tied back to the site's existing transparency positioning (how-we-report-results, case studies).
2. Linked the new post from: the roofing-marketing-agency/ pillar page (natural insertion in the "What we will tell you before you hire us" section), and the blog hub (now lists newest-first).
3. Added to sitemap.xml with correct lastmod.
4. Full Article + BreadcrumbList schema on the new post, following the exact pattern established on the first post. Validated all 73 JSON-LD blocks sitewide still parse cleanly after publishing.
5. Verified live: 200 status, correct H1, internal link resolves, sitemap entry live.

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates

---

## 2026-08-25 — Third blog post; both primary pillars now have supporting content

**Performance check:** real GSC/GA4/Bing API data still not accessible from this environment (no OAuth credentials configured) — checked a `site:roofersgrowths.com` web search instead as a rough indexing signal; the case-studies page is confirmed indexed. PageSpeed Insights public API is still quota-blocked (0 daily quota without a personal API key) — retried, no change, not worth retrying every session; needs the user's own Google Cloud API key or waiting for GSC's own Core Web Vitals report to populate.

**Completed:**
1. Published the third blog post: **"Buying roofing leads vs. generating your own: the real math"** at `/blog/buying-roofing-leads-vs-generating-your-own/` — targets the "roofing lead generation" primary pillar (the second confirmed primary keyword), comparison intent. Both primary pillars now have at least one supporting post.
2. Linked from the roofing-lead-generation/ pillar page's existing FAQ ("Should I buy roofing leads?" already made this exact point — added the link there rather than forcing an artificial mention elsewhere), and from the blog hub.
3. Cross-linked in both directions with the existing "what a roofing lead actually costs" post (it already linked out; added the missing link back in, updated its `dateModified` and sitemap `lastmod` to match).
4. Added to sitemap.xml. Validated all 76 JSON-LD blocks sitewide still parse cleanly. Verified live: 200 status, correct H1, both internal links resolve, sitemap entries live.
5. Caught and fixed my own mistake mid-session: the first draft of this post got truncated on write (cut off mid-attribute). Caught it before publishing by reading the file back, rewrote it complete, verified `</html>` closes exactly once before shipping.

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- 4 service pillars (roofing-google-ads, roofing-website-design, roofing-local-seo, roofing-ai-search-optimization) still have zero supporting blog content
- Location pages (Phase 3) not yet started — still gated on primary-pillar depth per the roadmap

---

## 2026-08-27 — Fourth blog post (roofing-seo pillar); found and fixed a real schema bug

**Completed:**
1. Published **"What roofing SEO actually costs, and why"** at `/blog/what-roofing-seo-actually-costs/` — targets the roofing-seo pillar, grounded in the real published pricing tiers ($599/$899/$1,199), no invented numbers. Linked from the roofing-seo FAQ, the pricing page's existing "why cheap SEO does not work" section, and the blog hub.
2. **Found and fixed a real bug while reviewing FAQ schema for this post:** 5 instances of literal `—` (escaped em dash) remained in FAQPage JSON-LD text across `index.html`, `roofing-seo/`, `roofing-local-seo/`, and `roofing-ai-search-optimization/`. The original sitewide em-dash removal (done in an earlier session) only rewrote visible HTML text — it missed these schema strings entirely, meaning Google and AI crawlers reading the structured data directly were still seeing em dashes the user explicitly asked to remove everywhere. Rewrote each to match the already-fixed visible-text phrasing exactly, verified zero remain sitewide.
3. Validated all 79 JSON-LD blocks sitewide still parse cleanly. Verified live: 200 status, correct H1, all links resolve, schema fix confirmed live.

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- 4 service pillars (roofing-google-ads, roofing-website-design, roofing-local-seo, roofing-ai-search-optimization) still have zero supporting blog content
- Location pages (Phase 3) not yet started

---

## 2026-08-28 — Real GEO win: Google AI Mode citation, showcased sitewide

**User-initiated:** user found a real Google AI Mode result (dated screenshot) citing roofersgrowths.com as the top, detailed answer for "best marketing agency for roofers in United States," and asked to feature it on the site.

**Completed:**
1. Published `/blog/googles-ai-mode-is-recommending-roofers-growths/` with the real screenshot embedded (processed: cropped browser chrome, converted to webp, saved as `assets/img/google-ai-mode-citation.webp`). Framed deliberately as a dated, point-in-time result, not a permanent guarantee — explicit paragraph in the post says AI Mode answers aren't static and this citation isn't promised to persist. Matters because the master prompt's rules explicitly forbid guaranteed-ranking-style claims.
2. Added a new reusable `.ai-cite` badge component to `style.css` (matches existing design tokens, no ad-hoc styling) and placed it: (a) at the very top of the homepage hero, above the H1, per the user's explicit request for top-of-page placement; (b) on `/roofing-ai-search-optimization/` right under the page's CTA, since this is literally proof the service the page sells actually works.
3. Both placements are dated ("August 2026") and link through to the full post rather than asserting the citation as an evergreen fact.
4. Added to sitemap.xml (priority 0.7, slightly above standard blog posts given its homepage prominence).
5. Deploy hit a transient SSH connection timeout on first push (`ssh: connect to host *** port ***: Connection timed out`) — retried via `workflow_dispatch` and it succeeded in 9s, confirming it was a one-off network blip, not a config regression. Verified live: post (200), image (200), both badges present in the live HTML.

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- 4 service pillars still have zero supporting blog content
- Location pages (Phase 3) not yet started
- Consider re-checking the AI Mode citation periodically (e.g. monthly) since it could change — if it stops citing us, the homepage badge and service-page callout should be reconsidered

---

## 2026-08-31 — Homepage AI-citation section redesigned; fifth blog post (roofing-google-ads pillar)

**User feedback:** the small inline `.ai-cite` badge crammed into the hero "looked bad." Replaced it with a dedicated homepage section, right after the hero/ticker, reusing the existing two-column `.stmt` layout (same pattern as the "difference" section) so it matches the rest of the page. Full screenshot shown alongside the copy, same dated/honest framing kept. Removed the cramped hero badge entirely; kept the same badge component on the roofing-ai-search-optimization page since that placement wasn't flagged as a problem.

**Performance check:** `site:roofersgrowths.com` still surfaces only the case-studies page via this proxy check — no visible change since the last check. Not a precise signal (this WebSearch tool isn't a true `site:` operator), but nothing to report either way. Still waiting on real GSC data to accumulate.

**Completed:**
1. Redesigned the homepage AI-citation placement per user feedback (see above).
2. Published the fifth blog post: **"Google Local Services Ads vs. Google Ads for roofers"** — first supporting content for the roofing-google-ads pillar. Grounded in the pillar's real published figures ($3,000-$5,000/mo budget floor, the existing "cheapest booked job in the account" LSA description) rather than inventing new numbers.
3. Linked from the pillar's budget FAQ and the blog hub. Did not force a link into the terse "Local Service Ads" card description (same judgment call as an earlier session — card-grid copy is intentionally short, forcing a link there would hurt more than help).
4. Validated all 85 JSON-LD blocks sitewide, verified live: 200 status, correct H1, link resolves, sitemap entry live.

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- 3 service pillars still have zero supporting blog content: roofing-website-design, roofing-local-seo, roofing-ai-search-optimization (the AI Mode post counts as a proof piece, not pillar-cluster content)
- Location pages (Phase 3) not yet started
- Continue periodic AI Mode citation re-check

---

## 2026-09-02 — Sixth blog post (roofing-local-seo pillar)

**Completed:**
1. Published **"Google Business Profile checklist for roofing contractors"** at `/blog/google-business-profile-checklist-for-roofers/` — first supporting content for the roofing-local-seo pillar. A genuine, actionable checklist (categories, service area honesty, photo cadence, review velocity, Q&A maintenance, suspension triggers), grounded in the pillar's existing proximity/service-area and review-velocity guidance rather than inventing new claims.
2. Linked from the pillar's "How many reviews do I need?" FAQ and the blog hub.
3. Validated all 88 JSON-LD blocks sitewide, verified live: 200 status, correct H1, link resolves, sitemap entry live.

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- 2 service pillars still have zero supporting blog content: roofing-website-design, roofing-ai-search-optimization
- Location pages (Phase 3) not yet started
- Continue periodic AI Mode citation re-check

---

## 2026-09-02/03 — Out-of-band feature work: /ai-demo/ page (user-requested, not part of the SEO daily loop)

Not part of "Do today's tasks" — a direct feature request. Logged here for continuity since it touches shared assets and site structure.

- Built `/ai-demo/` — an AI receptionist call-me demo (form posts to an existing n8n webhook). Added to the header nav sitewide.
- User feedback: the initial form UI (inline-styled) looked unpolished. Rebuilt with dedicated `.demo-panel`/`.demo-field` CSS components, added a "why this exists" section (cold sales calls vs. real customers) and a 3-point benefits section.
- **Real bug found and fixed:** `.htaccess` caches `style.css` for a full year with zero cache-busting. A mid-session CSS edit silently broke for anyone who had visited before (the new form rendered completely unstyled). Fixed by versioning the shared `style.css`/`main.js` URLs (`?v=20260903`) sitewide — this is now a standing rule, see `00-audit.md`.
- Linked `/ai-demo/` into `roofing-lead-generation/`'s "Speed to lead" section (genuine fit: an answered call matters as much as a fast one).

## 2026-09-04 — Eighth blog post (roofing-ai-search-optimization pillar) — all 7 pillars now have supporting content

**Completed:**
1. Published **"How ChatGPT and Google AI Overviews recommend roofing contractors"** at `/blog/how-chatgpt-and-google-ai-overviews-recommend-roofers/` — last of the 7 service pillars to get supporting content. Expands on the pillar's existing "how AI decides who to recommend" section without duplicating it, and links to the real, dated AI Mode citation post as a live example rather than a hypothetical.
2. Linked from the pillar's "worth optimising for yet" FAQ and the blog hub.
3. Validated all 93 JSON-LD blocks sitewide, verified live: 200 status, correct H1, all links resolve, sitemap entry live.

**Milestone:** 6 of 7 service pillars now have at least one supporting blog post (roofing-seo, roofing-marketing-agency, roofing-lead-generation, roofing-google-ads, roofing-local-seo, roofing-ai-search-optimization). Only roofing-website-design remains.

**Not yet done (top of backlog for next session):**
- roofing-website-design is the only pillar still without supporting blog content
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- Location pages (Phase 3) — good time to start now that pillar depth is solid

---

## 2026-09-06 — Ninth blog post: all 7 service pillars now have supporting content

**Completed:**
1. Published **"What makes a roofing website convert vs. just look good"** at `/blog/what-makes-a-roofing-website-convert/` — last of the 7 service pillars to get supporting content. Covers speed as a conversion feature, real proof vs. stock imagery, single clear CTA, mobile-first design, and fix-vs-rebuild guidance, expanding on the pillar's existing card copy without duplicating it.
2. Linked from the pillar's "fix vs. rebuild" FAQ and the blog hub.
3. Validated all 96 JSON-LD blocks sitewide, verified live: 200 status, correct H1, link resolves, sitemap entry live.

**Milestone: all 7 service pillars now have at least one supporting blog post.** Phase 2 (pillar depth) content goal is complete. Per the roadmap, next phase is location pages (Phase 3) — see `02-location-strategy.md` for the Tier 1 priority order (Houston → DFW → Miami → Tampa/Orlando).

**Not yet done (top of backlog for next session):**
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates (verified 2026-08-21 — well over two weeks now, worth a real check next session if GSC access becomes available)
- Location pages (Phase 3) — recommended next major initiative, pillar depth is done
- Consider a second blog post under a high-value pillar (roofing-marketing-agency or roofing-lead-generation, the two primary keywords) now that every pillar has first coverage, per the "publish 2-4 a month" cadence in the roadmap

---

## 2026-09-08 — Phase 3 started: first location page (Houston)

**Completed:**
1. Published `/roofing-marketing-agency-houston/` — the first Tier 1 location page. Passed the non-negotiable differentiation checklist from `02-location-strategy.md`: real market driver (hail + insurance-restoration, not retail-cycle), realistic competitive density (national franchises + established locals, more expensive/slower than a smaller metro), local search behavior (reactive spikes after storms vs. steady browsing), GBP proximity strategy specific to Houston's sprawl, and insurance-specific paid-media guidance. City-scoped `Service` schema (`areaServed: Houston, TX`) and its own FAQPage, not reused from the national pillar.
2. Deliberately did not fabricate Houston-specific case-study proof — none of the 5 published case studies are Houston companies, so the page links to `/case-studies/` generally rather than implying local results that do not exist.
3. Linked from the roofing-marketing-agency pillar's existing weather-driven-demand paragraph, a natural fit rather than a forced insertion.
4. Did not add a "Locations" nav entry or hub page yet — one city does not warrant a structural nav change; revisit once 2-3 more Tier 1 cities are live.
5. Validated all 100 JSON-LD blocks sitewide, verified live: 200 status, correct H1, link resolves, sitemap entry live.

**Not yet done (top of backlog for next session):**
- Next Tier 1 location page: Dallas-Fort Worth, TX (per `02-location-strategy.md` priority order)
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates
- Consider a "Locations" hub/nav entry once 2-3 more cities are live

---

## 2026-09-10 — Second location page (Dallas-Fort Worth)

**Completed:**
1. Published `/roofing-marketing-agency-dallas/` — second Tier 1 location page. Made genuinely distinct from Houston, not a city-name swap: DFW's driver is hail frequency specifically (one of the most hail-active corridors in the US) rather than Houston's hurricane/insurance mix; the dominant competitive threat is traveling storm-chaser crews rather than established local rivals; demand is swath-specific to individual storm tracks rather than metro-wide; GBP and paid-media guidance follow from that (narrow post-storm targeting, same-day ad activation to compete with chasers).
2. **Caught and fixed my own error before shipping:** the FAQPage schema's `@context` was written as `"schema.org"` instead of `"https://schema.org"` — a real typo that would have made that block invalid structured data. Caught it by grepping for the exact string before running the sitewide JSON-LD validator, fixed it, then re-validated clean across all 104 blocks.
3. Linked from the roofing-marketing-agency pillar (now mentions both Houston and Dallas-Fort Worth). Did not force a cross-link between the two city pages themselves — the pillar page already serves as their natural hub.
4. Verified live: 200 status, correct H1, link resolves, sitemap entry live, schema fix confirmed live.

**Not yet done (top of backlog for next session):**
- Next Tier 1 location page: Miami / South Florida (per `02-location-strategy.md` priority order)
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates (now three weeks since verification)
- Consider a "Locations" hub/nav entry now that 2 cities are live — still borderline, maybe wait for a 3rd

---

## 2026-09-12 — Third location page (Miami) — all 3 Tier 1 cities now live

**Completed:**
1. Published `/roofing-marketing-agency-miami/` — third and final Tier 1 location page. Genuinely distinct from both Texas pages: hurricane wind on a predictable seasonal calendar (allowing pre-season marketing, unlike hail's total unpredictability), Florida's insurance crisis forcing roof-age replacements independent of storm damage, tile roofing's effect on ticket size and sales conversation, and a bilingual-market requirement neither Texas page needed.
2. **Caught and fixed another self-introduced bug before shipping:** a stray `</summary>` HTML closing tag had leaked into the FAQ schema's question name (`"Does a Miami roofing company need bilingual marketing?</summary>"`), which would have been invalid structured data. Caught via targeted grep before running the validator, fixed, re-validated clean across all 108 blocks. This is the second such schema-typo catch in three location pages — worth double-checking schema strings specifically (not just running the JSON validator) on every future page, since a stray tag can sit inside a syntactically-valid JSON string and not trip a parser.
3. Linked from the roofing-marketing-agency pillar (now references all three cities).
4. Verified live: 200 status, correct H1, link resolves, sitemap entry live, schema fix confirmed live.

**Milestone: all 3 Tier 1 location pages (Houston, Dallas-Fort Worth, Miami) are now live.** Per `02-location-strategy.md`, next up is Tier 2 (Kansas City, Oklahoma City, Denver) — but this is also the point where a "Locations" nav/hub entry becomes reasonable to consider, since there are now enough cities to justify one.

**Not yet done (top of backlog for next session):**
- Decide on a "Locations" hub page and/or nav entry now that 3 cities exist
- Next candidate: first Tier 2 location page (Kansas City, MO/KS) per the roadmap, or a "Locations" hub first
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates (over three weeks since verification now)

---

## 2026-09-15 — Locations hub page + sitewide nav entry

**Completed:**
1. Published `/locations/` — a hub page listing all 3 Tier 1 city pages with genuine one-line summaries of each market's distinct driver (not generic filler), linking through to the full pages.
2. Added "Locations" to the header nav on all 38 pages, right after Services, via a scripted sitewide edit anchored on the Services→Tools nav concatenation (handles both the plain and `aria-current="page"` variants correctly).
3. **Deliberately did not add a matching footer column.** Checked `.f-grid` CSS first — it's a fixed 4-column grid (`1.6fr 1fr 1fr 1fr`), not an auto-fit layout. Adding a 5th column would have broken visual consistency between this page and the other 37 with a 4-column footer, so discoverability relies on nav + the hub page + the existing pillar-page link instead.
4. Validated all 110 JSON-LD blocks sitewide, verified live: 200 status, correct H1, nav link confirmed on both the homepage and a location page, sitemap entry live.

**Not yet done (top of backlog for next session):**
- Next Tier 2 location page: Kansas City, MO/KS (per `02-location-strategy.md` priority order)
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates (nearly four weeks since verification now — this is becoming the single most overdue item in the backlog)

---

## 2026-09-18 — Fifth location page (Kansas City, first Tier 2 city)

**Completed:**
1. Published `/roofing-marketing-agency-kansas-city/` — first Tier 2 location page. Deliberately avoided repeating "another hail market" angle already covered by DFW: KC's real distinguishing features are that it's the only bi-state metro covered (different MO/KS contractor licensing rules, a genuine GBP-proximity wrinkle that follows from it), storms bring hail and wind/tornado damage together rather than hail alone, the severe-weather season is narrowly spring-loaded (April-June) rather than near year-round or a six-month hurricane window, and the market is meaningfully less saturated than the three Tier 1 metros. Real stats cited (Missouri #2 nationally in 2025 hail claim payouts per State Farm, $879M Kansas severe storm claims per the Kansas Insurance Department) were already sourced in `01-keyword-research.md` from the original research pass, not invented fresh.
2. Checked specifically for the two schema-typo patterns that bit the last two location pages (stray HTML tags leaked into a `name` field, and a `@context` missing `https://`) before running the validator — this page had neither.
3. Linked from the roofing-marketing-agency pillar (now references all 4 cities) and added as a fourth card on `/locations/`.
4. Deploy hit the same transient SSH timeout seen a few times before; retried via `workflow_dispatch` and it succeeded in 10s. Verified live: 200 status, correct H1, both links resolve, sitemap entry live.

**Not yet done (top of backlog for next session):**
- Next Tier 2 location page: Oklahoma City, OK, or Denver, CO (per `02-location-strategy.md` priority order)
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates — now the single most overdue backlog item, approaching a month since verification with zero query data reviewed

---

## 2026-09-19 — Sixth location page (Oklahoma City)

**Completed:**
1. Published `/roofing-marketing-agency-oklahoma-city/` — second Tier 2 city. Deliberately chose a new angle instead of repeating storm-chaser or hail-frequency framing already used for DFW and Kansas City: OKC's real differentiator is tornado-driven catastrophic loss, which is an emergency-response sales motion (same-day tarping, then a much larger rebuild claim alongside a public adjuster) rather than a routine hail-inspection funnel. Also covers Oklahoma's well-documented rapid homeowners-insurance premium increases tied to severe weather losses.
2. **Caught the same `</summary>` schema-leak bug a third time**, in the exact same spot (a `Question.name` field) as the last two location pages. Fixed it before shipping, then ran a proper sitewide grep for both known bug patterns (leaked closing tags in schema `name` fields, and `@context` missing `https://`) across all 40 files, not just the new page — zero hits confirmed. This 3-for-3 recurrence means the mistake is systematic (writing the visible FAQ HTML and the schema JSON from the same mental draft, copy-pasting a fragment across), not a one-off typo. **Going forward, the sitewide grep for both patterns is now a standing step before every JSON-LD validation, not just a spot-check on the new file.**
3. Linked from the pillar page and added to `/locations/` — now 5 cities total: Houston, Dallas-Fort Worth, Miami, Kansas City, Oklahoma City.
4. Deploy succeeded on the first attempt this time (no transient timeout). Verified live: 200 status, correct H1, all links resolve, sitemap entry live, schema fix confirmed live.

**Not yet done (top of backlog for next session):**
- Next Tier 2 location page: Denver, CO (per `02-location-strategy.md` priority order) — this closes out the originally-planned Tier 2 list
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates — still the single most overdue backlog item, now approaching a month since verification

---

## 2026-09-20 — Seventh location page (Denver) — Tier 2 list complete

**Completed:**
1. Published `/roofing-marketing-agency-denver/` — third Tier 2 city, closing out the originally-planned Tier 2 list (Kansas City, Oklahoma City, Denver). Genuinely distinct angle from the hail-heavy pages already live: Colorado insurers discount premiums for Class 4 impact-resistant shingles (a savings pitch, not just a repair pitch), a large share of Denver growth sits in HOA-governed suburbs with approved material/color lists that need to enter the sales process upfront, and Colorado has its own consumer-protection law specific to storm-related roofing contracts.
2. Ran the now-standing sitewide scan for both recurring schema bugs (leaked HTML tags in `name` fields, `@context` missing `https://`, including space-variant patterns) before validating — first location page in three attempts with zero hits.
3. Linked from the pillar page (now 6 cities) and added to `/locations/`.
4. Deploy succeeded on the first attempt. Verified live: 200 status, correct H1, all links resolve, sitemap entry live.

**Milestone: both the Tier 1 (Houston, Dallas-Fort Worth, Miami) and Tier 2 (Kansas City, Oklahoma City, Denver) location lists from `02-location-strategy.md` are now fully built — 6 city pages total, none templated, each with a genuinely different market driver.**

**Not yet done (top of backlog for next session):**
- Location strategy has no Tier 3 list defined yet — next session should either extend `02-location-strategy.md` with new candidate markets (using the same real-driver research standard as the first 6) or shift focus away from location pages toward other roadmap items for a while
- Rich Results Test spot-check (user action)
- First real GSC query/impression pull once data accumulates — still the single most overdue backlog item, now over a month since verification with zero query data ever reviewed
