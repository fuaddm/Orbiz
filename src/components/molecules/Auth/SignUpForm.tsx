"use client";
import React from "react";
import { Input } from "@/components/atoms/Input/Input";
import MainCircle from "@/components/onetime/Auth/MainCircle";
import { Button } from "@/components/atoms/Button/Button";
import Apple from "@/svg/Socials/Apple";
import X from "@/svg/Socials/X";
import Google from "@/svg/Socials/Google";
import Mail from "@/svg/Mail";
import Lock from "@/svg/Lock";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import Link from "next/link";
import Codesandbox from "@/svg/Codesandbox";
import toast from "react-hot-toast";

const SignUpForm = () => {
  function handleClick() {
    toast.success("This is a demo site");
  }

  return (
    <div className="flex w-full max-w-[400px] flex-col items-center">
      <MainCircle classNames="mb-4">
        <Codesandbox className="h-full w-full stroke-white" />
      </MainCircle>
      <span className="mb-2 text-2xl font-medium text-solid-900">Create your Orbiz account</span>
      <span className="mb-6 text-base font-normal text-solid-500">Enter your details to sign up.</span>
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

      <div className="mb-6 flex w-full items-center">
        <label className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm font-normal text-solid-500">
            I agree to the{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="font-medium text-solid-900 underline hover:underline"
            >
              Terms of Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="font-medium text-solid-900 underline hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
        </label>
      </div>

      <Button
        onClick={handleClick}
        variant="primary"
        classNames="mb-6 w-full"
      >
        Sign Up
      </Button>

      <span className="text-base font-normal text-solid-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-solid-900 hover:underline"
        >
          Sign In
        </Link>
      </span>
    </div>
  );
};

export default SignUpForm;
