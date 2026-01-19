import type { Metadata } from "next";
import "./globals.css";

// app/layout.tsx


export const metadata: Metadata = {
  title: "IntellectsEra Exports",
  description: "Premium Indian exports delivered worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

