import { servicesData, serviceToPrefixMap } from "@/data/servicesData";
import { cities } from "@/data/cities";
import { guidesData } from "@/data/guidesData";

export default function sitemap() {
  const baseUrl = "https://bhartiyanairambulanceservices.in";
  const currentDate = new Date().toISOString();

  // Static core pages
  const staticPages = ["", "/services", "/about", "/ourwork", "/News"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Main individual service category pages
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Authoritative E-E-A-T informational guide pages
  const guidePages = guidesData.map((guide) => ({
    url: `${baseUrl}/News/${guide.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Programmatic high-intent local landing pages (Service x City combinations)
  const programmaticPages = [];
  for (const prefix of Object.values(serviceToPrefixMap)) {
    for (const city of cities) {
      programmaticPages.push({
        url: `${baseUrl}/${prefix}${city.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...guidePages,
    ...programmaticPages,
  ];
}
