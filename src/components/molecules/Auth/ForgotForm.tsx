"use client";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import MainCircle from "@/components/onetime/Auth/MainCircle";
import Mail from "@/svg/Mail";
import UserV2 from "@/svg/UserV2";
import React from "react";
import toast from "react-hot-toast";

const ForgotForm = () => {
  function handleClick() {
    toast.success("This is a demo site");
  }

  return (
    <div className="flex w-full max-w-[450px] flex-col items-center rounded-[20px] border border-solid border-solid-100 bg-white p-6 shadow-[0px_5px_10px_-2px_rgba(13,13,18,0.04),0px_4px_8px_-1px_rgba(13,13,18,0.02)] md:p-10">
      <MainCircle classNames="mb-4">
        <UserV2 className="h-full w-full stroke-white" />
      </MainCircle>
      <span className="mb-2 text-2xl font-medium text-solid-900">Forgot Password</span>
      <span className="mb-6 text-base font-normal text-solid-500">No worries, we’ll send you reset instructions.</span>

      <Input
        label="Email"
        type="email"
        leftEl={<Mail className="h-5 w-5 stroke-solid-400" />}
        placeholder="orbiz@financial.com"
        classNames="mb-6"
      />

      <Button
        onClick={handleClick}
        variant="primary"
        classNames="w-full"
      >
        Reset Password
      </Button>
    </div>
  );
};

export default ForgotForm;
