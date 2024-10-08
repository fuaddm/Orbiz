"use client";
import React from "react";
import Content from "./content.mdx";
import styles from "./privacy.module.css";
import { cn } from "@/lib/utils";

const PrivacyContent = () => {
  function handleClick() {
    const modalContent = document.querySelector(".print") as HTMLElement;
    const modalHTML = modalContent.innerHTML;

    const newWindow = window.open("", "", "width=800, height=500");
    if (newWindow) {
      const document = newWindow.document;
      const pageContent =
        "<!DOCTYPE html>\n" +
        "<html>\n" +
        "<head>\n" +
        '<meta charset="utf-8" />\n' +
        `<title>Text</title>\n` +
        `<style>
        html,body {
        font-family: sans-serif;
        }
        .contact-info {
        display: none;
        }
  </style>\n` +
        "</head>\n" +
        "<body>\n" +
        modalHTML +
        "\n</body>\n</html>";
      document.write(pageContent);
      document.close();
      newWindow.print();
    }
  }

  return (
    <div className="container flex justify-center">
      <div
        className={cn({
          "max-w-[840px] py-12 md:py-[88px]": true,
          [styles.content]: true,
        })}
      >
        <div className="print">
          <Content handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
