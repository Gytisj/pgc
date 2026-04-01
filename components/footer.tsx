"use client";

import Image from "next/image";
import pgcLogo from "./assets/pgc.jpg";

export default function Footer() {
  return (
    <footer className="bg-pgc-black-deep border-t border-pgc-800 py-6 md:py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-pgc-white rounded-full flex items-center justify-center">
            <Image
              src={pgcLogo}
              alt="Pain Game Club Logo"
              width={75}
              height={75}
              className="rounded-full w-8 h-8 md:w-10 md:h-10"
            />
          </div>
          <span className="tracking-wider text-sm text-pgc-white uppercase font-semibold">
            Pain Game Club
          </span>
        </div>
        <p className="text-pgc-400 text-xs md:text-sm">
          &copy; 2024 Pain Game Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
