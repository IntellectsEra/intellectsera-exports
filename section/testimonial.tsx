"use client";

import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    text: "Top-notch GI products and produce. They handle sourcing to loading flawlessly.",
    name: "Leslie Alexander",
    location: "Georgia",
    avatar: "/testimonial/lesilie.png",
  },
  {
    text: "Spices and veggies hit higher standards than others. Always professional and on time.",
    name: "Jenny Wilson",
    location: "Saint Barthélemy",
    avatar: "/testimonial/jenny.png",
  },
  {
    text: "Reliable, durable hardware. Documentation and shipment quality are always solid.",
    name: "Courtney Henry",
    location: "Tajikistan",
    avatar: "/testimonial/courtney.png",
  },
  {
    text: "Durable, well-crafted textiles. Samples and updates arrive quickly.",
    name: "Dianne Russell",
    location: "Iceland",
    avatar: "/testimonial/dianne.png",
  },
  {
    text: "Fresh fruits and vibrant flowers every time. Logistics is smooth.",
    name: "Jacob Jones",
    location: "Saint Vincent and The Grenadines",
    avatar: "/testimonial/jacob.png",
  },
  {
    text: "Quality stays consistent. Packaging is perfect. Easy team to work with.",
    name: "Ibrahim",
    location: "Saudi Arabia",
    avatar: "/testimonial/ibrahim.png",
  },
  {
    text: "Authentic GI products that sell well. Clear and honest communication.",
    name: "Theresa Webb",
    location: "Guinea",
    avatar: "/testimonial/theresa.png",
  },
  {
    text: "Fresh spices and greens that boost our kitchen results. Always punctual.",
    name: "Guy Hawkins",
    location: "Algeria",
    avatar: "/testimonial/guy.png",
  },
   {
    text: "Top-notch GI products and produce. They handle sourcing to loading flawlessly.",
    name: "Leslie Alexander",
    location: "Georgia",
    avatar: "/testimonial/lesilie.png",
  },
  {
    text: "Spices and veggies hit higher standards than others. Always professional and on time.",
    name: "Jenny Wilson",
    location: "Saint Barthélemy",
    avatar: "/testimonial/jenny.png",
  },
];

export default function TestimonialsSection() {
  // split into rows of 5
  const rows: typeof testimonials[] = [];
  for (let i = 0; i < testimonials.length; i += 5) {
    rows.push(testimonials.slice(i, i + 5));
  }

  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="section-inner">

          {/* HEADING */}
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-20"
            style={{ color: "var(--header-text)" }}
          >
            Words of Praise from Others
            <br className="hidden sm:block" />
            about Our Presence
          </h2>

          {/* ROWS */}
          <div className="space-y-12">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative overflow-hidden">
                <div
                  className="flex gap-8 w-max animate-marquee"
                  style={{
                    animationDuration: `${row.length * 6}s`,
                  }}
                >
                  {[...row, ...row].map((item, index) => (
                    <TestimonialCard key={index} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
