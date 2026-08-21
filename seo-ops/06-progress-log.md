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
- Manual sitemap submission in GSC and Bing Webmaster UI (user action, ~1 minute each)
- Rich Results Test spot-check on 1-2 URLs (user action — needs browser, not scriptable)
- Real Core Web Vitals baseline once a personal PageSpeed API key is available, or first GSC Core Web Vitals report once enough data accumulates
- First real GSC query/impression data pull, once it accumulates (verified today — expect nothing meaningful for several more days)
