"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

const categories = [
  {
    title: "TN GI-Tag Products",
    desc: "Handpicked GI treasures representing culture, craftsmanship, purity, and regional excellence.",
    icon: "/products/tn-tag.png",
  },
  {
    title: "Spices",
    desc: "Fresh, aromatic spices sourced ethically to deliver bold global culinary experiences.",
    icon: "/products/spices.png",
  },
  {
    title: "Flowers",
    desc: "Vibrant, farm-grown flowers packed carefully for long-lasting international freshness.",
    icon: "/products/flowers.png",
  },
  {
    title: "Fruits & Vegetables",
    desc: "Premium fruits and vegetables, selected for quality and harvested fresh for exports.",
    icon: "/products/fruits-vegetables.png",
  },
  {
    title: "Hardware",
    desc: "Strong, precision-built hardware engineered for consistent global performance and trust.",
    icon: "/products/hardware.png",
  },
  {
    title: "Textiles",
    desc: "Quality fabrics crafted by skilled artisans, designed for durability and worldwide demand.",
    icon: "/products/textiles.png",
  },
];

export default function CategoriesSection() {
  return (
    <section
      className="w-full py-24"
      style={{ backgroundColor: "var(--section-bg-soft)" }}
    >
      <div className="container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
          {/* ===== HEADING ===== */}
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ color: "var(--header-text)" }}
          >
            Bringing Quality Indian <br className="hidden sm:block" />
            Goods to Global Buyers
          </h2>

          {/* ===== CARDS GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((item) => (
              <div
                key={item.title}
                className="group bg-[var(--white)] rounded-lg overflow-hidden flex flex-col transition hover:shadow-lg"
              >
                {/* ===== CARD BODY ===== */}
                <div className="p-8 flex-1">
                  {/* ICON (INCREASED SIZE) */}
                  <div className="relative w-26 h-26 mb-6">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>

                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--black)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--card-para)" }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* DIVIDER LINE  */}
                <div
                  className="h-px w-full"
                  style={{ backgroundColor: "var(--card-divider)" }}
                />

                {/* CARD FOOTER */}
                <div className="p-6">
                  <span className="text-sm font-semibold cursor-pointer hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/*  CTA  */}
          <div className="flex justify-center">
            <Button label="Download Brochure" href="/brochure.pdf" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
