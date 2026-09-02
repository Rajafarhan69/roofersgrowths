# Technical & Content Audit — baseline 2026-08-21

Internal working document. Not deployed (excluded in deploy.yml). Updated as state changes — do not duplicate; edit in place.

## Technical SEO — current state

| Item | Status | Note |
|---|---|---|
| HTTPS | ✅ | Forced via `.htaccess` |
| www redirect | ✅ | Stripped via `.htaccess` |
| robots.txt | ✅ | Explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, Claude-User, Google-Extended, Applebot-Extended, Bingbot |
| sitemap.xml | ✅ | 24 URLs, matches live pages exactly |
| GA4 | ✅ | `G-Q7QQZJX79S`, installed sitewide 2026-08-20 |
| Search Console | ✅ | Verified 2026-08-21. No meaningful query/impression data yet — takes days to accumulate |
| Bing Webmaster Tools | ✅ | Verified 2026-08-21 |
| Canonicals | ⬜ | Not yet audited page-by-page |
| Schema | ✅ | ProfessionalService (with logo) + Person on every page; FAQPage on 8 pages; Article schema (with image) on blog post + all 5 case studies; BreadcrumbList on all 23 non-homepage pages (added 2026-08-21) |
| Core Web Vitals / PageSpeed | partial | Public PageSpeed API is quota-blocked in this environment (needs a personal Google Cloud API key to run). Proxy check done instead: homepage HTML 23.4KB, style.css 36.5KB, main.js 7.3KB — lean. main.js correctly placed before `</body>`, not render-blocking. TTFB ~0.8s — a bit high for static hosting, worth watching, not yet diagnosed |
| Asset cache-busting | ✅ fixed 2026-09-02 | `.htaccess` caches CSS 1yr / JS 7d with no versioning, so a mid-session CSS change silently broke for anyone with a cached copy (visible bug: ai-demo form rendered unstyled). Fixed by adding `?v=20260903` to the shared `style.css`/`main.js` references on all pages. **Bump this version string whenever style.css or main.js changes** — it's the only way an edit actually reaches browsers that already cached the old file. |
| Image alt text | ✅ | Audited 2026-08-21 — zero images missing alt sitewide |
| Open Graph | ✅ | Audited 2026-08-21 — og:title present on every page |
| FAQ rich results | ⚠️ note | Google fully removed FAQ rich results from Search as of May 2026 (not just restricted — gone entirely). FAQPage schema is still worth keeping: Google still parses it to understand page content, and it feeds GEO/AI-answer-engine extraction, but it will not produce the expandable snippet in Google results anymore. Don't expect that visual in Search Console. |
| 404 handling | ✅ | Custom `404.html` via `ErrorDocument 404` |
| Compression / caching | ✅ | mod_deflate + mod_expires configured in `.htaccess` |

## Content inventory (25 live pages)

- Homepage `/`
- Services hub `/services/`
- 7 service pages: `roofing-seo`, `roofing-marketing-agency`, `roofing-google-ads`, `roofing-website-design`, `roofing-local-seo`, `roofing-lead-generation`, `roofing-ai-search-optimization`
- Case studies hub + 5 case studies: `roofing-101`, `hero-roofing`, `forever-exteriors`, `sln-construction`, `laporta-roofing`
- Pricing `/pricing/` — $599 / $899 / $1,199
- Blog hub + 1 post: `what-a-roofing-lead-actually-costs`
- Resources `/resources/` — 2 working calculators (lead value, SEO ROI)
- `/ai-demo/` — interactive AI receptionist demo (call-me form), added 2026-09-02, not part of the blog content calendar but a real indexed page
- Trust pages: `/about/`, `/about/rafero/`, `/how-we-report-results/`, `/editorial-policy/`
- `/contact/` — GHL iframe embed

## Content gaps identified

- **Zero location pages.** No service+location coverage at all — biggest structural gap vs. the master prompt's local-search goal.
- **Only 1 blog post.** No topical cluster depth yet under any of the 7 service pillars.
- No comparison content (SEO vs PPC, buy-vs-generate leads, agency-vs-DIY).
- No dedicated pages yet for: social media marketing, content marketing, reputation management, marketing automation, AI automation — all named in the master prompt as candidate services. **Decision needed:** only build these if genuinely offered as services (see Open Questions).
- No author/expertise (Person schema exists only on homepage, not attached to blog posts).

## Decisions — CONFIRMED 2026-08-21

1. **Service scope:** only the 7 services already live get dedicated pages (roofing SEO, marketing agency, Google Ads, website design, local SEO, lead generation, AI search optimization). No pages for social media marketing, content marketing, reputation management, marketing automation, or AI automation unless the user confirms those are genuinely sold — do not build these speculatively.
2. **Primary keyword targets:** "roofing marketing agency" + "roofing lead generation" — see `01-keyword-research.md`.
3. Location page priority order stands as proposed in `02-location-strategy.md` (Houston → DFW → Miami → Tampa/Orlando as Tier 1).
