import React from "react";
import AuthHeading from "@/components/molecules/AuthHeading";
import ForgotForm from "@/components/molecules/Auth/ForgotForm";

const page = () => {
  return (
    <div className="relative min-h-screen">
      <AuthHeading />
      <div className="container flex justify-center py-8 md:py-16">
        <ForgotForm />
      </div>
      <div className="absolute bottom-0 left-0 flex w-full justify-start py-6">
        <div className="container">
          <span className="text-sm font-normal text-solid-500">© 2023 Orbiz</span>
        </div>
      </div>
    </div>
  );
};

export default page;
