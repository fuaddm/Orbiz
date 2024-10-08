import React from "react";
import Heading from "@/components/molecules/Heading";
import TextPaper from "@/svg/TextPaper";
import { BlogCard } from "@/components/atoms/BlogCard";
import blogPic from "~/public/images/blog/image 13_result.webp";
import blog2Pic from "~/public/images/blog/image 14_result.webp";
import blog3Pic from "~/public/images/blog/image 15_result.webp";

const Blogs = () => {
  return (
    <div className="container pb-12 pt-12 md:pb-[88px] md:pt-16">
      <Heading
        tagText="Blogs"
        tagLeft={<TextPaper className="h-4 w-4 stroke-primary-100" />}
        title="Our Articles For Company Creators"
        subtitle="Here are all our essential tips for getting your business project off the ground."
      />
      <div className="mb-10 md:mb-[72px]"></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          href="/"
          imgUrl={blogPic}
          category="Finance"
          title="Finance AI trends: filtering the hype to find the value"
          date={new Date("2024-01-11")}
          author="Mileana Vanessa"
        />
        <BlogCard
          href="/"
          imgUrl={blog2Pic}
          category="Marketing & Sales"
          title="Finance AI trends: filtering the hype to find the value"
          date={new Date("2024-01-11")}
          author="Mileana Vanessa"
        />
        <BlogCard
          href="/"
          imgUrl={blog3Pic}
          category="Finance"
          title="Finance AI trends: filtering the hype to find the value"
          date={new Date("2024-01-11")}
          author="Mileana Vanessa"
        />
      </div>
    </div>
  );
};

export default Blogs;
