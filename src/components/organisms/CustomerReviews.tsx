"use client";
import React, { useState } from "react";
import Heading from "@/components/molecules/Heading";
import SvgUsers from "@/svg/Users";
import { CustomerReview } from "@/components/molecules/CustomerReview";
import avatarPic1 from "~/public/images/avatars/avatar1_result.webp";
import avatarPic2 from "~/public/images/avatars/avatar2_result.webp";
import avatarPic3 from "~/public/images/avatars/avatar3_result.webp";
import avatarPic4 from "~/public/images/avatars/avatar4_result.webp";
import avatarPic5 from "~/public/images/avatars/avatar5_result.webp";
import avatarPic6 from "~/public/images/avatars/avatar6_result.webp";

type Props = {
  variant?: "primary" | "secondary";
};

const CustomerReviews = ({ variant = "primary" }: Props) => {
  return (
    <div className="container pb-[120px] pt-20">
      <Heading
        tagText="Our Customers"
        tagLeft={<SvgUsers className="h-4 w-4 stroke-primary-100" />}
        title="See What Our Customers Are Saying"
        subtitle="Here's what some of our customers say about our platform."
      />
      <div className="mb-10 md:mb-14"></div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        <CustomerReview
          variant={variant}
          stars={4.8}
          review="“Payments are the main interaction point between Accenture’s financial services clients and their customers, and are core to our relationships beyond that sector too.”."
          name="Floyd Miles"
          work="Co-Founder, Heroes Digital"
          avatarUrl={avatarPic1}
        />
        <CustomerReview
          variant={variant}
          stars={4.9}
          review="Orbiz has completely transformed the way we handle payments. Its intuitive platform and lightning-fast transactions have made a huge difference in our day-to-day operations. The integration was seamless, and the support team has been fantastic!"
          name="Novák Balázs"
          work="Co-Founder, WoCommerce"
          avatarUrl={avatarPic2}
        />
        <CustomerReview
          variant={variant}
          stars={4.6}
          review="As a small business owner, Orbiz has been a game changer for me. It simplifies payments while offering top-notch security, which gives my customers confidence. I’ve seen an improvement in checkout times and overall customer satisfaction."
          name="Orosz Boldizsár"
          work="Founder, Okta"
          avatarUrl={avatarPic3}
        />
        <CustomerReview
          variant={variant}
          stars={4.4}
          review="We switched to Orbiz for its global payment capabilities, and it has exceeded our expectations. Transactions are secure and processed quickly, even for international clients. Orbiz has made expanding our business much easier."
          name="Orosz Boldizsár"
          work="Co-Founder, Wazerr"
          avatarUrl={avatarPic5}
        />
        <CustomerReview
          variant={variant}
          stars={4.6}
          review="The reliability and security of Orbiz set it apart from other payment systems we’ve used. It’s easy to set up and works seamlessly with our existing platforms. Plus, the real-time analytics are a huge bonus for tracking our business performance."
          name="Darrel Steward"
          work="Founder, Tager"
          avatarUrl={avatarPic4}
        />
        <CustomerReview
          variant={variant}
          stars={5}
          review="Orbiz has become a crucial part of our financial operations. The platform is incredibly user-friendly, and the customer support is always responsive. Its flexibility and speed make it ideal for businesses of any size."
          name="Nina Bolshvicka"
          work="Co-Founder, Kremep"
          avatarUrl={avatarPic6}
        />
      </div>
    </div>
  );
};

export default CustomerReviews;
