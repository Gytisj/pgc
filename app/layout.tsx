import type { Metadata } from "next";
import { Outfit, Archivo_Black, Cedarville_Cursive } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const cedarville = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cedarville",
  display: "swap",
});

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
      <body
        className={`${outfit.variable} ${archivoBlack.variable} ${cedarville.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
