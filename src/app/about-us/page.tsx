import { Footer } from "@/components/molecules/Footer/Footer";
import AboutUsHero from "@/components/organisms/AboutUs/AboutUsHero";
import Investors from "@/components/organisms/AboutUs/Investors";
import JoinBanner from "@/components/organisms/AboutUs/JoinBanner";
import Missions from "@/components/organisms/AboutUs/Missions";
import OrbizTeam from "@/components/organisms/AboutUs/OrbizTeam";
import Blogs from "@/components/organisms/Blogs";
import React from "react";

const page = () => {
  return (
    <>
      <AboutUsHero />
      <Missions />
      <OrbizTeam />
      <Investors />
      <JoinBanner />
      <Blogs />
      <Footer />
    </>
  );
};

export default page;
