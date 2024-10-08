import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <>
      <div className="flex max-w-min flex-col gap-4">
        <div className="text-base font-semibold text-solid-500">Features</div>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Payment Link
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Recurring Billing
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Invoice Management
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Checkout
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Integrations
          </Link>
          <Link
            href="/pricing"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="flex max-w-min flex-col gap-4">
        <div className="text-base font-semibold text-solid-500">Solutions</div>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            eCommerce
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Finance Automation
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Crypto
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Global Business
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Marketplaces
          </Link>
        </div>
      </div>
      <div className="flex max-w-min flex-col gap-4">
        <div className="text-base font-semibold text-solid-500">Resources</div>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Tutorials
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Community
          </Link>
          <Link
            href="/privacy-policy"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="flex max-w-min flex-col gap-4">
        <div className="text-base font-semibold text-solid-500">About</div>
        <div className="flex flex-col gap-3">
          <Link
            href="/about-us"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Company
          </Link>
          <Link
            href="/about-us"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Careers
          </Link>
          <Link
            href="/about-us"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="text-base font-semibold text-solid-25 md:whitespace-nowrap"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
