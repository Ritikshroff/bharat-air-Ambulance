---
name: programmatic-seo-engine
description: Automates and scales Programmatic SEO landing pages for emergency ambulance, hearse, and funeral services across Indian cities and neighborhoods to beat competitors like Last Journey in Google SERP.
---

# Programmatic SEO Engine for Emergency & Funeral Services

## Purpose
Enables automated, scalable, and non-duplicate programmatic landing page generation for `[service]-in-[city]` combinations (e.g., hearse van, dead body freezer box, air ambulance, cremation services) matching high-intent emergency searches.

## URL Structure Strategy
- Structure: `/[service]-in-[city]` or `/[service]/[city]`
  Examples:
  - `/hearse-van-service-in-delhi`
  - `/dead-body-freezer-box-in-mumbai`
  - `/cremation-services-in-bangalore`
  - `/dead-body-transportation-in-kolkata`
  - `/air-ambulance-service-in-hyderabad`

## Key Data Points Required per City Landing Page
To prevent "Doorway Pages" or thin content penalties from Google:
1. **Local Context & Logistics**: Real traffic considerations, proximity to major airport/railways, local cremation grounds/ghats.
2. **Key Local Hospitals**: Top 4-5 hospitals served with distance/timing estimates.
3. **Local Crematoriums & Ghats**: Dedicated section for funeral/hearse/cremation pages (e.g. Nigambodh Ghat in Delhi, Banganga in Mumbai, Kalpalli in Bangalore).
4. **Local Response Time Guarantee**: e.g., "15-minute dispatch in South Delhi & Noida".
5. **Direct Emergency Helpline**: Click-to-call `tel:` with regional priority number and WhatsApp integration.
6. **Local FAQ Accordion**: 3-5 hyper-local questions (e.g., "How much does a hearse van cost from AIIMS Delhi to Noida?").

## Next.js Implementation Checklist
- Use `generateStaticParams()` to pre-render top 25 cities for all 8 core services (200+ static HTML pages).
- Export dynamic `generateMetadata({ params })` with optimized title, description, and canonical URL.
- Inject full JSON-LD structured data (`EmergencyService` + `FAQPage` + `BreadcrumbList`).
- Update `sitemap.js` to automatically index every dynamic combination.
