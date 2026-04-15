import { servicesData } from "@/data/servicesData";
import { cities } from "@/data/cities";

export default function sitemap() {
  const baseUrl = "https://bharatairambulance.com";

  // Static pages
  const staticPages = ["", "/services", "/about", "/ourwork", "/news"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );

  // Dynamic service pages
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic city landing pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/air-ambulance-service-in-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
