"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Anchor } from "./anchor";

export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="mt-16">
      <ul className="flex flex-col gap-4 text-gray-main text-md">
        <Anchor path="/sobre" label="Coisas" />
        <li className="flex group items-center gap-1 text-blue-dark">
          <span className="h-1 w-8 group-hover:w-8 transition-all bg-blue-main rounded-full"></span>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li className="flex group items-center gap-1 hover:text-blue-dark">
          <span className="h-1 w-4 group-hover:w-8 transition-all bg-blue-light rounded-full"></span>
          <Link href="/projetos">Projetos</Link>
        </li>
      </ul>
    </nav>
  );
};
