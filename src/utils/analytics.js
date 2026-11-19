/**
 * Analytics & Conversion Tracking Utility for GA4 & Google Tag Manager (GTM)
 * Tracks high-intent emergency events: Call, WhatsApp, Form Submissions
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === "undefined") return;

  const enrichedParams = {
    ...eventParams,
    page_location: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  // Google Analytics 4 (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, enrichedParams);
  }

  // Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedParams,
    });
  }
};

export const trackCallClick = (service = "General Emergency", city = "India") => {
  trackEvent("emergency_call_click", {
    service_name: service,
    city_name: city,
    contact_type: "phone",
    phone_number: "+918882383902",
  });
};

export const trackWhatsAppClick = (service = "General Emergency", city = "India") => {
  trackEvent("whatsapp_chat_click", {
    service_name: service,
    city_name: city,
    contact_type: "whatsapp",
  });
};

export const trackFormSubmit = (formName = "Quick Quote Form", details = {}) => {
  trackEvent("generate_lead", {
    form_name: formName,
    ...details,
  });
};
