"use client";
import React from "react";
import { Anchor } from "./anchor";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-6 mb-8 md:mt-16 md:mb-8">
      <ul className="flex flex-row md:flex-col gap-4 text-gray-main text-md">
        <Anchor path={pathname === "/" ? "/" : "/sobre"} label="Sobre" />
        <Anchor path="/projetos" label="Projetos" />
      </ul>
    </nav>
  );
};
