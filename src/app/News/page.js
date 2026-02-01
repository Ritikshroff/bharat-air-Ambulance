import React from "react";
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "News & Medical Updates | Bharat Air Ambulance",
  description:
    "Stay informed with the latest updates on global medical repatriation, aero-medical technology, and emergency response protocols in India.",
};

export default function News() {
  return (
    <div className="bg-white min-h-screen">
      <ComingSoon />
    </div>
  );
}
