"use client";

import NextImage from "next/image";

interface Testimonial {
  text: string;
  name: string;
  location: string;
  avatar: string;
}

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="w-[320px] h-[240px] rounded-xl p-6 flex flex-col justify-between"
      style={{ backgroundColor: "#F6F7F1" }}
    >
      {/* QUOTE */}
      <NextImage
        src="/icons/quote.svg"
        alt="Quote"
        width={28}
        height={28}
        className="mb-4 opacity-80"
      />

      {/* TEXT */}
      <p className="text-sm leading-relaxed mb-6 text-[#2F2F2F]">
        {item.text}
      </p>

      {/* USER */}
      <div className="flex items-center gap-3">
        <NextImage
          src={item.avatar}
          alt={item.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-semibold text-[#464646]">
            {item.name}
          </p>
          <p className="text-xs text-[#858585]">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}
