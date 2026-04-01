import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pain Game Club - Tattoo Studio",
  description:
    "Pain Game Club - Professional tattoo studio in Vilnius, Lithuania. Specializing in fine line tattoos, realistic portraits, and custom artwork.",
  keywords:
    "don tattoo,tattoo studio, Vilnius, Vilnius tattoo, Lithuania, fine line, realistic, portraits, custom artwork, pgc, pain game club",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
