"use client";

import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "What products do you export?",
    answer:
      "We export a wide range of Indian products including GI-tag goods, spices, fruits, vegetables, flowers, textiles, and industrial hardware.",
  },
  {
    id: "02",
    question: "How do you ensure product quality?",
    answer:
      "All products are sourced from trusted farmers and manufacturers, thoroughly checked for quality, and packed according to international export standards.",
  },
  {
    id: "03",
    question: "Do you offer custom product sourcing?",
    answer:
      "Yes, we provide customized sourcing solutions based on buyer requirements, quantities, specifications, and destination standards.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full py-24"
      style={{ backgroundColor: "var(--section-bg-soft)" }}
    >
      <div className="container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">

          {/*  TITLE  */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: "var(--header-text)" }}
          >
            Questions about our Exports
          </h2>

          {/* TOP DIVIDER  */}
          <div
            className="w-full h-px mb-12"
            style={{ backgroundColor: "var(--header-text)" }}
          />

          {/* FAQ LIST */}
          <div className="space-y-10">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="group pb-10"
                  style={{
                    borderBottom: "1px solid var(--card-divider)",
                  }}
                >
                  <div
                    className="grid grid-cols-[60px_1fr_60px] items-start gap-6 cursor-pointer"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    {/* NUMBER */}
                    <span
                      className="text-lg transition-colors"
                      style={{
                        color: isOpen
                          ? "var(--header-text)"
                          : "var(--stats-label)",
                      }}
                    >
                      {item.id}
                    </span>

                    {/* QUESTION + ANSWER */}
                    <div>
                      <h4
                        className="text-lg font-semibold transition-colors"
                        style={{ color: "var(--header-text)" }}
                      >
                        {item.question}
                      </h4>

                      {isOpen && (
                        <p
                          className="mt-4 text-sm leading-relaxed max-w-3xl"
                          style={{ color: "var(--stats-para)" }}
                        >
                          {item.answer}
                        </p>
                      )}
                    </div>

                    {/* ICON */}
                    <div className="flex justify-end">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                        style={{
                          backgroundColor: isOpen
                            ? "var(--header-text)"
                            : "transparent",
                          border: "1px solid var(--header-text)",
                          color: isOpen
                            ? "var(--white)"
                            : "var(--header-text)",
                        }}
                      >
                        {/* PERFECTLY CENTERED ICON */}
                        <span className="text-lg leading-none flex items-center justify-center">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
