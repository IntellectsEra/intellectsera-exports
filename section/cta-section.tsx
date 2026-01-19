"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

export default function PremiumExportCTA() {
  return (
    <section className="relative w-full h-[28rem] md:h-[32rem] overflow-hidden">
      {/* BACKGROUND IMAGE  */}
      <Image
        src="/hero/ship.png"
        alt="Export Containers"
        fill
        priority
        className="object-cover"
      />

      {/*GRADIENT OVERLAY */}
      <Image
        src="/hero/hero-gradient.png"
        alt="Gradient Overlay"
        fill
        priority
        className="object-cover"
      />

      {/* CONTENT  */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto w-full">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
            <div className="max-w-4xl mx-auto text-center">
              {/* HEADING */}
              <h2 className="text-[var(--white)] font-bold leading-tight mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <span>
                  Discover Premium Indian Goods and Elevate Your Sourcing with
                  Our Trusted Export Expertise
                </span>
              </h2>

              {/* CTA */}
              <Button
                label="Download Brochure"
                href="/brochure.pdf"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
