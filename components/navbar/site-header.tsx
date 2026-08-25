"use client";

import { Navbar } from "@/components/navbar/navbar";

export function SiteHeader() {
  return (
    <div className="relative z-50">
      <div className="h-24 lg:h-28" aria-hidden="true" />
      <Navbar />
    </div>
  );
}
