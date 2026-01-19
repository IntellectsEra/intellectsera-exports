"use client";

import Image from "next/image";

type BlogItem = {
  id: number;
  image: string;
  imageHeight: string;
  category: string;
  title: string;
  date: string;
  comments: string;
  titleSize?: string;
};

const blogData: BlogItem[] = [
  {
    id: 1,
    image: "/sustainability-section/ogfarming.png",
    imageHeight: "h-[220px]", 
    category: "Sustainability",
    title: "Organic farm challenges and how to beat easily",
    date: "Sep 2, 2025",
    comments: "2 Comments",
    titleSize: "text-lg",
  },
  {
    id: 2,
    image: "/sustainability-section/ogcertificate.png",
    imageHeight: "h-[340px]",
    category: "Sustainability",
    title: "Understanding the certification process for organic farms",
    date: "Sep 2, 2025",
    comments: "No Comments",
    titleSize: "text-xl",
  },
  {
    id: 3,
    image: "/sustainability-section/communityfarming.png",
    imageHeight: "h-[280px]",
    category: "Sustainability",
    title: "The benefits of organic farming for local communities",
    date: "Sep 2, 2025",
    comments: "No Comments",
    titleSize: "text-lg",
  },
];

export default function SustainabilityBlogSection() {
  return (
    <section
      className="w-full py-28"
      style={{ backgroundColor: "var(--section-bg-soft)" }}
    >
      <div className="container mx-auto">
        <div className="section-inner px-8 md:px-12 lg:px-28 xl:px-32">
          <h2
            className="text-center text-4xl md:text-5xl font-semibold mb-20"
            style={{ color: "var(--header-text)" }}
          >
            Empowering Global <br /> Trade with Indian Quality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {blogData.map((item) => (
              <div key={item.id}>
                {/* IMAGE */}
                <div className={`relative w-full ${item.imageHeight} mb-6`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p
                  className="text-xs font-semibold tracking-widest mb-2 uppercase"
                  style={{ color: "var(--header-text)" }}
                >
                  {item.category}
                </p>

                <h3
                  className={`${item.titleSize} font-semibold mb-3 leading-snug`}
                  style={{ color: "var(--header-text)" }}
                >
                  {item.title}
                </h3>

                {/* DATE */}
                <p className="text-sm" style={{ color: "#86898C" }}>
                  {item.date} &nbsp; {item.comments}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
