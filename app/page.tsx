// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <div className="container mx-auto flex flex-col px-4 sm:px-6 py-2 md:py-4 gap-2 md:gap-4">
      {/* Section Hero */}
      <Hero />
      {/* Section Services */}
      <Services />
    </div>
  );
}