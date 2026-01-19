"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

const stats = [
  { label: "Started in", value: "2023" },
  { label: "Export base", value: "Madurai" },
  { label: "Consignment value", value: "$50K" },
  { label: "Team size", value: "14" },
];

const features = [
  {
    id: 1,
    title: "Quality Sourcing",
    desc: "We partner with trusted growers and manufacturers to deliver products that meet global quality expectations every time.",
  },
  {
    id: 2,
    title: "Certified Standards",
    desc: "Every shipment follows strict international guidelines to ensure safety, freshness, and authenticity across all categories.",
  },
  {
    id: 3,
    title: "Reliable Global Shipping",
    desc: "We ensure smooth logistics, timely delivery, and consistent supply to help buyers build strong, long-term sourcing networks.",
  },
];

export default function AboutDeliverSection() {
  return (
    <section className="w-full bg-[var(--white)] py-24">
      <div className="container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">

          {/* STATS ROW  */}
          <div className="flex justify-center mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-3xl w-full">
              {stats.map((item) => (
                <div key={item.label}>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--stats-label)" }}
                  >
                    {item.label}
                  </p>
                  <h3
                    className="text-4xl font-bold"
                    style={{ color: "var(--black)" }}
                  >
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/*  MAIN CONTENT  */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl w-full items-center">

              {/* LEFT IMAGE */}
              <div className="relative w-full h-[40rem] rounded-2xl overflow-hidden">
                <Image
                  src="/hero/warehouseman.png"
                  alt="Warehouse Worker"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div style={{ color: "var(--header-text)" }}>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-12">
                  We Deliver Premium Indian Products Worldwide
                </h2>

                <div className="space-y-10">
                  {features.map((item, index) => (
                    <div key={item.id} className="flex gap-6">

                      {/* CIRCLE + LINE */}
                      <div className="relative flex flex-col items-center w-10">
                        <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center font-semibold z-10">
                          {item.id}
                        </div>

                        {index !== features.length - 1 && (
                          <div className="w-px  h-8  bg-[#A6A6A6] mt-4" />
                        )}
                      </div>

                      {/* TEXT */}
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm leading-relaxed text-[var(--stats-para)]">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Button label="Download Brochure" href="/brochure.pdf" size="lg" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
