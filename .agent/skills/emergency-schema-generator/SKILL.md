---
name: emergency-schema-generator
description: Generates Google-compliant JSON-LD structured data schemas (EmergencyService, MedicalBusiness, FAQPage, BreadcrumbList, LocalBusiness) for high SERP CTR and rich snippet qualification.
---

# Emergency & Medical Schema Generator

## Purpose
Produce validated, comprehensive JSON-LD structured data markup for emergency medical transport, ambulance, hearse, and funeral services, ensuring maximum visibility in Google Search, Knowledge Graph, and rich results.

## Required Schemas by Page Type

### 1. Homepage & Global Layout
- **Organization / EmergencyService**:
  - `name`: Bharat Air Ambulance & Funeral Logistics
  - `telephone`: `+918882383902`
  - `openingHoursSpecification`: `Mo-Su 00:00-24:00`
  - `priceRange`: `₹₹`
  - `areaServed`: `India, International`
  - `sameAs`: Social media profiles, business listings

### 2. Service Pages (`/services/[id]`)
- **Service & MedicalSpecialty**:
  - `serviceType`: e.g. "Air Ambulance", "Dead Body Freezer Box Rental", "Hearse Van Transportation"
  - `provider`: Organization reference
  - `termsOfService`: Transparent booking & cancellation terms
  - `hasOfferCatalog`: Tiers of service (e.g. Charter ICU vs Commercial Stretcher)

### 3. City Landing Pages (`/[service]-in-[city]`)
- **LocalBusiness / EmergencyService**:
  - `name`: `[Service Name] in [City]`
  - `address`: Local regional hub address or served administrative area
  - `geo`: Latitude/Longitude center of target city
  - `telephone`: Direct 24/7 emergency dispatch line
  - `availableChannel`: Phone call, WhatsApp dispatch, online booking form
- **FAQPage Schema**:
  - Array of Question & Answer entities. Crucial for capturing Google snippet real estate.
- **BreadcrumbList Schema**:
  - Home > Services > [Service Name] > [City]

## Validation Standard
- Must pass Google Rich Results Test without critical errors or missing required fields (`name`, `image`, `telephone`, `address`, `priceRange`).
