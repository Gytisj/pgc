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
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-base md:px-8 md:py-4",
    lg: "px-8 py-4 text-base md:px-12 md:py-5 md:text-lg",
  };

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      className={`bg-pgc-white text-pgc-black font-bold rounded-full uppercase tracking-wider hover:bg-gray-100 hover:scale-105 transition-all duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${sizeClasses[size]} ${className}`}
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
