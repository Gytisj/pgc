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
    "tattoo, studio, Vilnius, Lithuania, fine line, realistic, portraits, custom artwork",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
