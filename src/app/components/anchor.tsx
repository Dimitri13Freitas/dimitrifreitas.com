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
      className={`flex group items-center gap-1 ${
        isActive ? "text-blue-dark" : "hover:text-blue-dark"
      }`}
    >
      <span
        className={`h-1 group-hover:w-8 transition-all bg-blue-main rounded-full ${
          isActive ? "w-8 bg-blue-main" : "w-4 bg-blue-light"
        }`}
      ></span>
      <Link
        onClick={(e) => {
          e.preventDefault();
          console.log(pathname);
          document.body.classList.add("anim");
          function removeAnim() {
            document.body.classList.remove("anim");
            document.body.removeEventListener("animationend", removeAnim);
          }
          document.body.addEventListener("animationend", removeAnim);
          router.push(path);
        }}
        href={path}
      >
        {label}
      </Link>
    </li>
  );
};
