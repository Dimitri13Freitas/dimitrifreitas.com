import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface AnchorProps {
  label: string;
  path: string;
}

export const Anchor = ({ label, path }: AnchorProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <li
      className={`flex group  ${
        isActive ? "text-blue-dark" : "hover:text-blue-dark"
      }`}
    >
      <Link
        className="flex flex-col-reverse md:flex-row md:items-center gap-1"
        onClick={(e) => {
          e.preventDefault();
          document.body.classList.add("anim");
          function removeAnim() {
            router.push(path);
            document.body.classList.remove("anim");
            document.body.removeEventListener("animationend", removeAnim);
          }
          document.body.addEventListener("animationend", removeAnim);
        }}
        href={path}
      >
        {" "}
        <span
          className={`h-1 group-hover:w-8 transition-all rounded-full ${
            isActive ? "w-8 bg-blue-main" : "w-4 bg-blue-light"
          }`}
        ></span>
        {label}
      </Link>
    </li>
  );
};
