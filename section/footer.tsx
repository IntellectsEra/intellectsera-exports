"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

/*  DATA */

const footerAbout = {
  logo: "/logo.svg",
  description:
    "Intellectsera Exports stands at the forefront of global sourcing, offering seasonal fresh produce, exclusive GI-tag products, premium spices, textiles, and durable hardware with unmatched export quality.",
};

const contactDetails = [
  "contact@intellectseraexports.com",
  "18/1/7, Green garden,\nSS Avenue, Sholavandhan,\nMadurai - 625214.",
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

/* FOOTER  */

export default function Footer() {
  return (
    <footer className="bg-[#060B14] text-[var(--white)]">
      <div className="container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">

          {/*  TOP FOOTER  */}
          <div
            className="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-[2fr_1fr_1fr_1fr]
              gap-x-14 gap-y-12
              py-20
            "
          >

            {/* ABOUT (Logo + Content) */}
            <div>
              <div className="inline-flex bg-[var(--white)] px-4 py-3 rounded-md mb-6">
                <Image
                  src={footerAbout.logo}
                  alt="Intellectsera Exports"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-[var(--footer-text)] max-w-sm">
                {footerAbout.description}
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>

              <ul className="space-y-4 text-sm text-[var(--footer-text)] whitespace-pre-line">
                {contactDetails.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* LINKS */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Links</h4>

              <ul className="space-y-4 text-sm text-[var(--footer-text)]">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>

              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <SocialIcon key={index}>
                      <Icon size={16} />
                    </SocialIcon>
                  );
                })}
              </div>
            </div>

          </div>

          {/*  DIVIDER  */}
          <div className="border-t border-[#26292F]"></div>

          {/* BOTTOM FOOTER  */}
          <div className="py-6 text-center text-sm text-[var(--footer-text)]">
            © 2025. All Rights Reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ---------------- SOCIAL ICON ---------------- */

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full border border-[#26292F] flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}
