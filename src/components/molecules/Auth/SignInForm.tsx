"use client";
import React, { useRef } from "react";
import { Input } from "@/components/atoms/Input/Input";
import MainCircle from "@/components/onetime/Auth/MainCircle";
import UserV2 from "@/svg/UserV2";
import { Button } from "@/components/atoms/Button/Button";
import Apple from "@/svg/Socials/Apple";
import X from "@/svg/Socials/X";
import Google from "@/svg/Socials/Google";
import Mail from "@/svg/Mail";
import Lock from "@/svg/Lock";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import Link from "next/link";
import toast from "react-hot-toast";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const SignInForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  function handleClick() {
    toast.success("This is a demo site");
  }

  return (
    <div
      ref={ref}
      className={cn({
        "flex w-full max-w-[400px] translate-y-4 flex-col items-center opacity-0 transition-all duration-300 ease-in-out": true,
        "translate-y-0 opacity-100": isInView,
      })}
    >
      <MainCircle classNames="mb-4">
        <UserV2 className="h-full w-full stroke-white" />
      </MainCircle>
      <span className="mb-2 text-2xl font-medium text-solid-900">Sign in to your account</span>
      <span className="mb-6 text-base font-normal text-solid-500">Enter your details to login.</span>
      <div className="mb-6 grid w-full grid-cols-3 items-center gap-3">
        <Button
          onClick={handleClick}
          variant="secondary"
          classNames="grid w-full place-items-center rounded-[10px] px-2.5 py-2.5"
        >
          <Apple className="h-5 w-5 fill-black" />
        </Button>
        <Button
          onClick={handleClick}
          variant="secondary"
          classNames="grid w-full place-items-center rounded-[10px] px-2.5 py-2.5"
        >
          <Google className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleClick}
          variant="secondary"
          classNames="grid w-full place-items-center rounded-[10px] px-2.5 py-2.5"
        >
          <X className="h-5 w-5 fill-black" />
        </Button>
      </div>
      <div className="relative mb-6 flex w-full justify-center">
        <span className="relative z-20 bg-white px-2.5 text-xs font-medium text-solid-400">OR</span>
        <div className="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-solid-100"></div>
      </div>

      <Input
        label="Email"
        type="email"
        leftEl={<Mail className="h-5 w-5 stroke-solid-400" />}
        placeholder="orbiz@financial.com"
        classNames="mb-4"
      />
      <Input
        label="Password"
        type="password"
        leftEl={<Lock className="h-5 w-5 stroke-solid-400" />}
        placeholder="Password"
        classNames="mb-4"
      />

      <div className="mb-6 flex w-full items-center justify-between">
        <label className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm font-normal text-solid-900">Keep me logged in</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-primary-100"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        onClick={handleClick}
        variant="primary"
        classNames="mb-6 w-full"
      >
        Sign In
      </Button>

      <span className="text-base font-normal text-solid-400">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-solid-900 hover:underline"
        >
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default SignInForm;
