"use client";
import React, { FC, useRef } from "react";
import { Logo } from "@/components/atoms/Logo";
import { AuthButtons } from "./AuthButtons";
import { Nav } from "./Nav";
import { Burger } from "./Burger";
import { createContext } from "react";
import { usePathname } from "next/navigation";
import { getIsBgDark } from "@/helper/route";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThemeContext = createContext(false);

const Navigation: FC = () => {
  const ref = useRef(null);
  const pathname = usePathname();
  let isBgDark: boolean = getIsBgDark(pathname);
  const isInView = useInView(ref, { once: true });

  const textColor = isBgDark ? "text-white" : "text-solid-900";

  return (
    <ThemeContext.Provider value={isBgDark}>
      <div
        ref={ref}
        className={cn({
          "flex w-full items-center justify-between py-5 md:py-6": true,
          [textColor]: true,
        })}
      >
        <Logo />
        <Nav />
        <AuthButtons />
        <Burger />
      </div>
    </ThemeContext.Provider>
  );
};

export { Navigation };
