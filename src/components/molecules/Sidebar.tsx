"use client";
import { useSidebarStore } from "@/lib/stores/sidebarStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";
import { navs } from "@/helper/navs";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  useEffect(() => {
    if (isOpen && window != null) {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 200);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={cn({
        "fixed left-0 top-0 z-50 h-screen w-full translate-x-full bg-white transition duration-200": true,
        "translate-x-0": isOpen,
      })}
    >
      <div className="flex flex-col items-end p-3">
        <div
          onClick={toggleSidebar}
          className="mb-4 w-fit cursor-pointer text-xl font-semibold text-solid-900"
        >
          Close
        </div>
        <div className="flex w-fit flex-col items-end gap-3">
          <Link
            className="w-fit py-1 text-base font-semibold hover:underline"
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
                className="w-fit py-1 text-base font-semibold hover:underline"
                href={`/${nav}`}
              >
                {navText}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
