"use client";
import React, { useContext } from "react";
import SvgBurger from "@/svg/Burger";
import { ThemeContext } from "./Navigation";
import { useSidebarStore } from "@/lib/stores/sidebarStore";

const Burger = () => {
  const isBgDark = useContext(ThemeContext);
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <div
      onClick={toggleSidebar}
      className="block h-6 w-6 cursor-pointer lg:hidden"
    >
      <SvgBurger
        width="24px"
        height="24px"
        className={isBgDark ? "stroke-white" : "stroke-solid-900"}
      />
    </div>
  );
};

export { Burger };
