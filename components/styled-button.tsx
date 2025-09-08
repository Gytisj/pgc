"use client";

import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export default function StyledButton({
  children,
  onClick,
  type = "button",
  className = "",
  size = "md",
  disabled = false,
}: StyledButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm md:px-4",
    md: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg",
    lg: "px-8 py-3 text-lg md:px-12 md:py-4 md:text-xl",
  };

  const baseClasses = `
    bg-white text-black font-bold rounded-full shadow-2xl 
    hover:bg-gray-100 hover:scale-105 transition-all duration-300 
    tracking-wider
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      style={{
        boxShadow:
          "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
      }}
    >
      {children}
    </button>
  );
}
