"use client";
import React, { useEffect, useState } from "react";

export function Footer() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verifica se está no cliente
      setIsDesktop(window.innerWidth > 768);

      const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  if (isDesktop) {
    return (
      <footer className="h-full min-w-16 relative bg-white-main">
        <span className="absolute bottom-16 left-5 -rotate-90 whitespace-nowrap origin-top-left text-gray-light">
          Dimitri Freitas © Copyright {new Date().getFullYear()}
        </span>
      </footer>
    );
  } else {
    return null;
  }
}
