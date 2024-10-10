"use client";
import { useSidebarStore } from "@/lib/stores/sidebarStore";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { navs } from "@/helper/navs";
import { useRouter } from "next/navigation";
import Close from "@/svg/Close";
import { Logo } from "@/components/atoms/Logo";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const closeSidebar = useSidebarStore((state) => state.close);

  const router = useRouter();
  const pathname = usePathname();

  function handleClick(nav: string) {
    router.push(`/${nav}`);
    closeSidebar();
  }

  useEffect(() => {
    if (isOpen && window != null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  return (
    <div
      className={cn({
        "fixed left-0 top-0 z-50 h-screen w-full translate-x-full bg-white transition duration-200 will-change-transform": true,
        "translate-x-0": isOpen,
      })}
    >
      <div className="container flex flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <div onClick={closeSidebar}>
            <Logo />
          </div>
          <div
            onClick={toggleSidebar}
            className="w-fit cursor-pointer self-end py-5 text-xl font-semibold text-solid-900"
          >
            <Close className="h-10 w-10 stroke-solid-900" />
          </div>
        </div>
        <div className="flex w-fit flex-col items-start gap-3">
          <span
            className="w-fit py-1 text-base font-semibold hover:underline"
            onClick={() => handleClick("")}
          >
            Home
          </span>
          {navs.map((nav) => {
            const navText = nav
              .split("-")
              .map((navWord) => {
                return navWord[0].toUpperCase() + navWord.slice(1);
              })
              .join(" ");
            return (
              <span
                key={nav}
                onClick={() => handleClick(nav)}
                className="w-fit py-1 text-base font-semibold hover:underline"
              >
                {navText}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
