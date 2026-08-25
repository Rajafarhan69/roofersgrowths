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
- Remaining 5 service pillars (roofing-seo, roofing-google-ads, roofing-website-design, roofing-local-seo, roofing-ai-search-optimization) still have zero supporting blog content — candidates per `03-topical-map.md`
- Location pages (Phase 3) not yet started — still gated on the two primary pillars having enough depth first, per the roadmap
