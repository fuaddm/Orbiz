import { Button } from "@/components/atoms/Button/Button";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "./Navigation";

const AuthButtons = () => {
  const isBgDark = useContext(ThemeContext);

  return (
    <div className="hidden h-fit w-fit items-center gap-2 lg:flex">
      {!isBgDark && (
        <Link href="/login">
          <Button
            classNames="whitespace-nowrap px-6 py-2"
            variant="secondary"
          >
            Login
          </Button>
        </Link>
      )}
      {isBgDark && (
        <Link href="/login">
          <Button
            classNames="whitespace-nowrap border border-solid border-solid-700 bg-solid-800 px-6 py-2 text-white enabled:active:border-white"
            variant="secondary"
          >
            Login
          </Button>
        </Link>
      )}
      <Link href="/register">
        <Button
          classNames="whitespace-nowrap px-4 py-2"
          variant="primary"
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export { AuthButtons };
