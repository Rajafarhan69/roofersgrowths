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
| Search Console | ⬜ | Not yet verified — top priority, no query/impression data exists until this is done |
| Bing Webmaster Tools | ⬜ | Not yet verified |
| Canonicals | ⬜ | Not yet audited page-by-page |
| Schema | ✅ partial | ProfessionalService + Person on homepage; FAQPage on 8 pages (home, pricing, and all 7 service pages). No BreadcrumbList, no Article/BlogPosting schema on the 1 published blog post yet |
| Core Web Vitals / PageSpeed | ⬜ | Not yet measured post-deploy |
| Image alt text | ⬜ | Not yet audited |
| Open Graph | partial | `og-image.jpg` exists; per-page OG tags not yet audited |
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
- Trust pages: `/about/`, `/about/rafero/`, `/how-we-report-results/`, `/editorial-policy/`
- `/contact/` — GHL iframe embed

## Content gaps identified

- **Zero location pages.** No service+location coverage at all — biggest structural gap vs. the master prompt's local-search goal.
- **Only 1 blog post.** No topical cluster depth yet under any of the 7 service pillars.
- No comparison content (SEO vs PPC, buy-vs-generate leads, agency-vs-DIY).
- No dedicated pages yet for: social media marketing, content marketing, reputation management, marketing automation, AI automation — all named in the master prompt as candidate services. **Decision needed:** only build these if genuinely offered as services (see Open Questions).
- No author/expertise (Person schema exists only on homepage, not attached to blog posts).

## Open questions (need user input before building)

1. Does Roofers Growths actually offer social media marketing, content marketing, reputation management, marketing automation, or AI automation as sellable services today, or only the 7 already live? Building pages for services not actually sold would violate the "no fake claims" rule.
2. Confirm the two primary keyword targets — see `01-keyword-research.md` for the recommended pair and reasoning.
3. Confirm priority order for location pages — see `02-location-strategy.md` for the proposed market list.
