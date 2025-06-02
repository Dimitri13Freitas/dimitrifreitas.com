import React from "react";

export function Footer() {
  return (
    <footer className="h-full min-w-16  relative bg-white-main">
      <span className="absolute bottom-16 left-5 -rotate-90 whitespace-nowrap origin-top-left text-gray-light">
        Dimitri Freitas © Copyright {new Date().getFullYear()}
      </span>
    </footer>
  );
}
