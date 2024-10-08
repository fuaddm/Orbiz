import React from "react";
import Logo from "@/svg/Logo";
import Link from "next/link";
import { Button } from "@/components/atoms/Button/Button";
import Headphone from "@/svg/Headphone";
import Close from "@/svg/Close";

const AuthHeading = () => {
  return (
    <div className="border-b border-solid border-solid-100 bg-transparent py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Logo className="h-10 w-10" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm font-normal text-solid-500">Need help?</span>
          <Link href="/contact-us">
            <Button
              variant="secondary"
              classNames="flex items-center gap-1 rounded-xl p-2 text-sm font-normal text-solid-500 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)]"
            >
              <Headphone className="h-5 w-5 fill-solid-500" />
              <span>Contact Us</span>
            </Button>
          </Link>
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Close className="h-5 w-5 stroke-solid-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthHeading;
