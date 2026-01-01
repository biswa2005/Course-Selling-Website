import React from "react";

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        gap-2
        text-lg
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-lg
        active:translate-y-0
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}
