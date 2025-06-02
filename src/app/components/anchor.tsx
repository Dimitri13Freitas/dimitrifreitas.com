import Link from "next/link";
import React from "react";

interface AnchorProps {
  label: string;
  path: string;
}

export const Anchor = ({ label, path }: AnchorProps) => {
  return (
    <li className="flex group items-center gap-1 text-blue-dark">
      <span className="h-1 w-8 group-hover:w-8 transition-all bg-blue-main rounded-full"></span>
      <Link href={path}>{label}</Link>
    </li>
  );
};
