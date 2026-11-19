# SEO & Content Architecture Rules

1. **Title & Meta Description Rules**:
   - Every page MUST have a unique `<title>` tag under 60 characters with primary keyword + location/brand.
   - Meta descriptions MUST be under 155 characters, include a clear value proposition, and end with a call to action (e.g., "24/7 ICU Flight Support. Call +91 88823 83902").
   - Always specify a canonical URL in `alternates: { canonical: ... }`.

2. **Heading Hierarchy**:
   - Exactly one `<h1>` per page matching the primary search intent.
   - Use `<h2>` for major sections (Services, Local Context, Case Studies, FAQs).
   - Use `<h3>` for cards, subsections, and FAQ questions.

3. **Structured Data (Schema.org)**:
   - Every transactional page must include validated JSON-LD schema (`EmergencyService`, `LocalBusiness`, or `Service`).
   - Include `FAQPage` schema on every page with an FAQ section to capture Google rich snippets.
   - Include `BreadcrumbList` schema for seamless Google crawling.

4. **Mobile & Core Web Vitals (CWV)**:
   - All emergency phone numbers must be clickable `tel:+918882383902`.
   - WhatsApp buttons must link directly to `https://wa.me/918882383902` with pre-filled context.
   - Images must use Next.js `<Image>` or compressed formats with explicit `alt` tags.

5. **Internal Linking**:
   - Use descriptive anchor text instead of "click here" or "learn more".
   - Cross-link related services (e.g. from Dead Body Transportation -> Freezer Box Services -> Hearse Van).
