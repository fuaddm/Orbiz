import Link from "next/link";
import React from "react";
import { navs } from "@/helper/navs";

const Nav = () => {
  return (
    <div className="hidden h-fit w-fit flex-nowrap items-center gap-2 lg:flex">
      <Link
        className="px-2 py-1 text-base font-semibold transition-opacity hover:opacity-60"
        href={`/`}
      >
        Home
      </Link>
      {navs.map((nav) => {
        const navText = nav
          .split("-")
          .map((navWord) => {
            return navWord[0].toUpperCase() + navWord.slice(1);
          })
          .join(" ");
        return (
          <Link
            key={nav}
            className="px-2 py-1 text-base font-semibold transition-opacity hover:opacity-60"
            href={`/${nav}`}
          >
            {navText}
          </Link>
        );
      })}
    </div>
  );
};

export { Nav };
