"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*  HEADER */}
      <header className="w-full bg-[var(--white)] border-b border-gray-200 relative z-40">
        <div
          className="
            w-full
            pl-[0.75rem] pr-[0.5rem]
            md:pl-[1.5rem] md:pr-[1.5rem]
            lg:pl-[2.5rem] lg:pr-[2.5rem]
            xl:pl-[3.5rem] xl:pr-[3.5rem]
          "
        >
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* LOGO */}
            <Image
              src="/logo.svg"
              alt="IntellectsEra Exports"
              width={160}
              height={38}
              priority
            />

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--header-text)]">
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Top Brands</a>
              <a href="#">Blogs</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* PHONE — DESKTOP ONLY */}
              <div className="hidden lg:flex items-center gap-2 text-sm">
                <Image
                  src="/icons/call-icon.svg"
                  alt="Call"
                  width={16}
                  height={16}
                />
                <span>+91 93420-42607</span>
              </div>

              {/* DOWNLOAD BROCHURE — DESKTOP ONLY */}
              <div className="hidden lg:block">
                <Button
                  label="Download Brochure"
                  href="/brochure.pdf"
                  size="sm"
                />
              </div>

              {/* HAMBURGER — MOBILE + TAB */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY  */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* DARK OVERLAY (LEFT 50%) */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/*  HALF PANEL (50%)  */}
        <div
          className={`
            absolute top-0 right-0 h-full
            w-1/2 max-w-[360px]
            bg-white
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
            flex flex-col
          `}
        >
          {/* PANEL HEADER */}
          <div className="flex items-center justify-between p-6 border-b">
            <Image
              src="/logo.svg"
              alt="IntellectsEra Exports"
              width={140}
              height={32}
            />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          {/* PANEL LINKS */}
          <nav className="flex flex-col gap-6 p-6 text-base font-medium text-[var(--header-text)]">
            <a href="#" onClick={() => setOpen(false)}>Home</a>
            <a href="#" onClick={() => setOpen(false)}>Products</a>
            <a href="#" onClick={() => setOpen(false)}>Top Brands</a>
            <a href="#" onClick={() => setOpen(false)}>Blogs</a>
            <a href="#" onClick={() => setOpen(false)}>About Us</a>
            <a href="#" onClick={() => setOpen(false)}>Contact Us</a>
          </nav>
        </div>
      </div>
    </>
  );
}
