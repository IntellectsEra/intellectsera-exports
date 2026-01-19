"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* ===== BACKGROUND IMAGE ===== */}
      <Image
        src="/hero/hero-image.jpg"
        alt="Export Containers"
        fill
        priority
        className="object-cover"
      />

      {/* ===== GRADIENT OVERLAY ===== */}
      <Image
        src="/hero/hero-gradient.png"
        alt="Gradient Overlay"
        fill
        priority
        className="object-cover"
      />

      {/* ===== CONTENT (CONSTRAINED) ===== */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto w-full">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
            
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-[var(--white)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Delivering India’s Finest <br />
                Exports to the Global Market
              </h1>

              <p className="mt-6 text-[var(--white)]  text-base md:text-lg font-semibold leading-relaxed">
                Empowering global trade with India’s best GI-tag goods, fresh
                produce, textiles, and hardware delivered with trusted quality.
              </p>

              <div className="mt-10">
               <Button label="Download Brochure" href="/brochure.pdf" size="lg" />

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== BOTTOM RIGHT ARROW (MOVED LEFT) ===== */}
      <div className="absolute z-20 bottom-6 right-10 md:bottom-10 md:right-18">
        <Image
          src="/icons/down-arrow.svg"
          alt="Scroll Down"
          width={44}
          height={44}
          className="opacity-80 hover:opacity-100 transition"
        />
      </div>

    </section>
  );
}
